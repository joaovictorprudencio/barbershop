import { useCallback, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import calendario from './img/calendario.png';
import Footer from '../footer/Footer';
import MaterialModal from '../modal/modal';
import DateSelector from '../Booking/DateSelector';
import TimeSelector from '../Booking/TimeSelector';
import ServiceSelector from '../Booking/ServiceSelector';
import BookingCheckout from '../Booking/BookingCheckout';
import CardConfirm from './confirmação/CardConfirm';
import { STEP_IDS } from '../Booking/bookingRules';
import { useCreateTime } from '../../services/create-time';
import { useAllTimes } from '../../services/available-times';
import { useBookingFlow } from '../../hooks/useBookingFlow';
import { selectBookableSlots } from '../../utils/schedule';
import { formatDateBR, toApiDate } from '../../utils/formats';

const NEXT_LABEL = {
  services: 'Escolher data e horário',
  'date-time': 'Ir para o checkout',
};

const BookmarkPage = () => {
  const pixKey = import.meta.env.VITE_KEY;
  const [feedback, setFeedback] = useState({ open: false, title: '', message: '' });

  const { mutateAsync: createTime, isPending: isCreating } = useCreateTime();

  const handleSubmit = useCallback(
    async ({ date, times, services, customer }) => {
      const apiDate = toApiDate(date);
      const slotPrices = services.flatMap((service) =>
        Array.from({ length: service.slots }, (_, slotIndex) =>
          slotIndex === 0 ? service.price : 0,
        ),
      );

      for (const [index, time] of times.entries()) {
        await createTime({
          name: customer.name,
          numberPhone: customer.phone,
          date: apiDate,
          time,
          price: slotPrices[index] ?? 0,
        });
      }
    },
    [createTime],
  );

  const booking = useBookingFlow({ onSubmit: handleSubmit });

  const {
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
    missingSlotsHint,
    status,
    error,
    confirmation,
  } = booking;

  
  const { data: existingTimes, isLoading: loadingTimes, isError: timesError } = useAllTimes();

  const { slots, routineGenerated } = useMemo(() => {
    
    if (timesError) return { slots: [], routineGenerated: true };
    return selectBookableSlots({ date: selectedDate, existingTimes });
  }, [selectedDate, existingTimes, timesError]);

  useEffect(() => {
    if (status === 'error' && error) {
      setFeedback({
        open: true,
        title: 'Horário indisponível',
        message: error.message,
      });
    }
  }, [error, status]);

  const activeStep = STEP_IDS.indexOf(currentStep);
  const isLastStep = activeStep === STEP_IDS.length - 1;
  const isConfirmed = status === 'success' && Boolean(confirmation);
  const inlineError = error && error.field !== 'submit' ? error : null;

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MaterialModal
        open={feedback.open}
        messageMain={feedback.title}
        message={feedback.message}
        onClose={() => setFeedback((current) => ({ ...current, open: false }))}
      />

      <Container maxWidth="md" sx={{ flex: 1, py: { xs: 2, sm: 3, md: 5 } }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
          <Box component="img" src={calendario} alt="" sx={{ width: 36, height: 36, flexShrink: 0 }} />
          <Typography
            variant="h4"
            component="h1"
            fontWeight={700}
            color="common.white"
            sx={{ fontSize: { xs: '1.6rem', sm: '2.125rem' }, minWidth: 0 }}
          >
            Agendamento
          </Typography>
        </Stack>
        <Typography variant="body2" color="rgba(255,255,255,.7)" sx={{ mb: 3 }}>
          Escolha os serviços, a data e os horários. A reserva é garantida com 50% do valor.
        </Typography>

        <Paper variant="outlined" sx={{ p: { xs: 1.5, sm: 3, md: 4 }, borderRadius: 4, minWidth: 0 }}>
          {isConfirmed ? (
            <CardConfirm confirmation={confirmation} />
          ) : (
            <Stack spacing={2.5}>
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    fontSize: '0.75rem',
                    lineHeight: 1.25,
                    mt: 0.5,
                  },
                  '& .MuiStepIcon-root': { fontSize: { xs: '1.5rem', sm: '1.75rem' } },
                }}
              >
                {booking.steps.map((step) => (
                  <Step key={step.id} sx={{ minWidth: 0 }}>
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {currentStep === 'services' && (
                <ServiceSelector
                  selectedServices={selectedServices}
                  onToggle={booking.toggleService}
                />
              )}

              {currentStep === 'date-time' && (
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'grid' },
                    flexDirection: 'column',
                    gridTemplateColumns: { md: 'minmax(0, 1fr) minmax(0, 1fr)' },
                    gap: 3,
                  }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <DateSelector
                      value={selectedDate}
                      onChange={booking.setDate}
                      error={inlineError?.field === 'date'}
                    />
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <TimeSelector
                      times={slots}
                      value={selectedTimes}
                      onChange={booking.toggleTime}
                      loading={loadingTimes}
                      dateLabel={formatDateBR(selectedDate)}
                      requiredSlots={requiredSlots}
                      serviceIds={selectedServices.map((service) => service.id)}
                      routineGenerated={routineGenerated}
                    />
                  </Box>
                </Box>
              )}

              {currentStep === 'checkout' && (
                <BookingCheckout
                  date={selectedDate}
                  times={selectedTimes}
                  services={selectedServices}
                  total={total}
                  reservationAmount={reservationAmount}
                  requiredSlots={requiredSlots}
                  multipleSlotsRequired={multipleSlotsRequired}
                  customer={customer}
                  onCustomerChange={booking.setCustomerField}
                  onBack={booking.previousStep}
                  onConfirm={booking.confirm}
                  loading={isCreating}
                  error={inlineError}
                  pixKey={pixKey}
                />
              )}

              {!isLastStep && (
                <Stack
                  direction="row"
                  spacing={1.5}
                  justifyContent="space-between"
                  sx={{ pt: 1 }}
                >
                  <Button
                    variant="text"
                    startIcon={<ArrowBackOutlinedIcon />}
                    onClick={booking.previousStep}
                    disabled={activeStep === 0}
                    sx={{ minHeight: 44, px: { xs: 1, sm: 2 } }}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardOutlinedIcon />}
                    onClick={booking.nextStep}
                    disabled={
                      (currentStep === 'services' && selectedServices.length === 0) ||
                      (currentStep === 'date-time' && missingSlots > 0)
                    }
                    sx={{
                      minHeight: 48,
                      px: 3,
                      flex: { xs: 1, sm: 'initial' },
                      minWidth: 0,
                    }}
                  >
                    {NEXT_LABEL[currentStep]}
                  </Button>
                </Stack>
              )}

          
              {currentStep === 'date-time' && missingSlots > 0 && (
                <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'right' }}>
                  {missingSlotsHint}
                </Typography>
              )}
            </Stack>
          )}
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default BookmarkPage;
