import { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import {
  STEPS,
  STEP_IDS,
  canGoToCheckout,
  canGoToDateTime,
  getPendingSlotMessage,
  getReservationAmount,
  getRequiredSlots,
  getTotal,
  missingSlotsMessage,
  needsMultipleSlots,
  validateBooking,
} from '../components/Booking/bookingRules';
import { toApiDate } from '../utils/formats';

export const useBookingFlow = ({ onSubmit } = {}) => {
  const [currentStep, setCurrentStep] = useState(STEP_IDS[0]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [customer, setCustomer] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(null);

  const serviceIds = selectedServices.map((service) => service.id);
  const total = getTotal(serviceIds);
  const reservationAmount = getReservationAmount(serviceIds);
  const requiredSlots = getRequiredSlots(serviceIds);
  const multipleSlotsRequired = needsMultipleSlots(serviceIds);
  const missingSlots = Math.max(0, requiredSlots - selectedTimes.length);
  const pendingSlotMessage = missingSlots > 0 ? getPendingSlotMessage(serviceIds, selectedTimes.length) : null;
  const missingSlotsHint = missingSlotsMessage(selectedTimes, serviceIds);

  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
    setSelectedTimes([]);
  }, []);


  const handleTimeChange = useCallback(
    (time) => {
      setSelectedTimes((current) => {
        if (current.includes(time)) return current.filter((item) => item !== time);
        return current.length >= requiredSlots ? current : [...current, time];
      });
    },
    [requiredSlots],
  );

  const handleToggleService = useCallback((service) => {
    setSelectedServices((current) => {
      if (!current.some((item) => item.id === service.id)) return [...current, service];

      const remaining = current.filter((item) => item.id !== service.id);
      const nextRequired = getRequiredSlots(remaining.map((item) => item.id));
      setSelectedTimes((times) => times.slice(0, nextRequired));
      return remaining;
    });
  }, []);

  const handleCustomerChange = useCallback((field) => (event) => {
    const { value } = event.target;
    setCustomer((current) => ({ ...current, [field]: value }));
  }, []);

  const goToStep = useCallback(
    (step) => {
      if (STEP_IDS.indexOf(step) > STEP_IDS.indexOf(currentStep)) {
        if (step === 'date-time' && !canGoToDateTime({ serviceIds })) return false;
        if (step === 'checkout' && !canGoToCheckout({ date: selectedDate, times: selectedTimes, serviceIds })) {
          return false;
        }
      }
      setCurrentStep(step);
      return true;
    },
    [currentStep, selectedDate, selectedTimes, serviceIds],
  );

  const nextStep = useCallback(() => {
    const index = STEP_IDS.indexOf(currentStep);
    if (index === -1 || index === STEP_IDS.length - 1) return false;
    return goToStep(STEP_IDS[index + 1]);
  }, [currentStep, goToStep]);

  const previousStep = useCallback(() => {
    const index = STEP_IDS.indexOf(currentStep);
    if (index <= 0) return false;
    setCurrentStep(STEP_IDS[index - 1]);
    return true;
  }, [currentStep]);

  const reset = useCallback(() => {
    setCurrentStep(STEP_IDS[0]);
    setSelectedDate(dayjs());
    setSelectedTimes([]);
    setSelectedServices([]);
    setCustomer({ name: '', phone: '' });
    setStatus('idle');
    setError(null);
    setConfirmation(null);
  }, []);

  const confirm = useCallback(async () => {
    const { valid, errors } = validateBooking({
      date: toApiDate(selectedDate),
      times: selectedTimes,
      serviceIds,
      name: customer.name,
      phone: customer.phone,
    });

    if (!valid) {
      setError(errors[0]);
      return { ok: false, errors };
    }

    setStatus('loading');
    setError(null);

    try {
      const result = onSubmit
        ? await onSubmit({
            date: selectedDate,
            times: selectedTimes,
            services: selectedServices,
            total,
            reservationAmount,
            customer,
          })
        : null;

      setStatus('success');
      setConfirmation({
        date: selectedDate,
        times: selectedTimes,
        services: selectedServices,
        total,
        reservationAmount,
        customer,
        result,
      });

      return { ok: true };
    } catch (submitError) {
      setStatus('error');
      setError({
        field: 'submit',
        message:
          submitError?.message ??
          'Infelizmente não temos esse horário disponível para essa data.',
      });
      return { ok: false, error: submitError };
    }
  }, [customer, onSubmit, reservationAmount, selectedDate, selectedServices, selectedTimes, serviceIds, total]);
  const state = useMemo(
    () => ({
      currentStep,
      selectedDate,
      selectedTimes,
      selectedServices,
      customer,
      total,
      reservationAmount,
      requiredSlots,
      multipleSlotsRequired,
      missingSlots,
      pendingSlotMessage,
      missingSlotsHint,
      status,
      error,
      confirmation,
    }),
    [
      confirmation,
      currentStep,
      customer,
      error,
      missingSlots,
      missingSlotsHint,
      multipleSlotsRequired,
      pendingSlotMessage,
      requiredSlots,
      reservationAmount,
      selectedDate,
      selectedServices,
      selectedTimes,
      status,
      total,
    ],
  );

  return {
    ...state,
    steps: STEPS,
    setDate: handleDateChange,
    toggleTime: handleTimeChange,
    toggleService: handleToggleService,
    setCustomerField: handleCustomerChange,
    goToStep,
    nextStep,
    previousStep,
    confirm,
    reset,
  };
};

export default useBookingFlow;
