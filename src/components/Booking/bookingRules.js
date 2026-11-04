import * as Yup from 'yup';
import { RESERVATION_PERCENTAGE, resolveServices } from '../../data/services';

export const STEP_IDS = ['services', 'date-time', 'checkout'];

export const STEPS = [
  { id: 'services', label: 'Serviços' },
  { id: 'date-time', label: 'Data e horário' },
  { id: 'checkout', label: 'Checkout' },
];

export const MIN_WHATSAPP = '5585998160243';
export const WHATSAPP_MESSAGE =
  'Olá! Acabei de confirmar um agendamento e vou enviar o comprovante do Pix.';

export const whatsappLink = (phone = MIN_WHATSAPP, message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const getRequiredSlots = (serviceIds = []) =>
  resolveServices(serviceIds).reduce((total, service) => total + service.slots, 0);

export const getTotal = (serviceIds = []) =>
  resolveServices(serviceIds).reduce((total, service) => total + service.price, 0);

export const getReservationAmount = (serviceIds = []) =>
  Number((getTotal(serviceIds) * RESERVATION_PERCENTAGE).toFixed(2));

export const needsMultipleSlots = (serviceIds = []) => getRequiredSlots(serviceIds) > 1;

const NUMBER_WORDS = {
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
};

const slotsLabel = (slots) => `${NUMBER_WORDS[slots] ?? slots} horário${slots > 1 ? 's' : ''}`;


export const getSlotDemands = (serviceIds = []) =>
  resolveServices(serviceIds).flatMap((service) => Array.from({ length: service.slots }, () => service.name));

const joinNames = (names) => {
  if (names.length === 1) return names[0];
  return `${names.slice(0, -1).join(', ')} e ${names[names.length - 1]}`;
};


export const getPendingSlotMessage = (serviceIds = [], selectedCount = 0) => {
  const demands = getSlotDemands(serviceIds);
  const pending = demands.slice(selectedCount);

  if (pending.length === 0) {
    return `Todos os horários necessários foram marcados. Você já pode ir para o checkout.`;
  }

  return `Marque mais ${slotsLabel(pending.length)} para ${joinNames(pending)}.`;
};


export const getMultiSlotMessage = (serviceIds = []) => {
  const slots = getRequiredSlots(serviceIds);
  const names = resolveServices(serviceIds).map((service) => service.name);
  const label = slotsLabel(slots);

  if (names.length === 0) {
    return `É necessário reservar ${label} para concluir o agendamento.`;
  }

  if (names.length === 1) {
    return `Para realizar ${names[0]}, será necessário reservar ${label}.`;
  }

  return `Para realizar ${names.join(' e ')}, será necessário reservar ${label}.`;
};


export const canGoToDateTime = ({ serviceIds = [] }) => serviceIds.length > 0;


export const canGoToCheckout = ({ date, times = [], serviceIds = [] }) =>
  serviceIds.length > 0 && Boolean(date) && times.length > 0 && times.length >= getRequiredSlots(serviceIds);

export const missingSlotsMessage = (times = [], serviceIds = []) => {
  const missing = getRequiredSlots(serviceIds) - times.length;
  if (missing <= 0) return null;
  return `Falta${missing > 1 ? 'm' : ''} marcar ${slotsLabel(missing)} para concluir o agendamento.`;
};

const bookingSchema = ({ requiredSlots }) =>
  Yup.object({
    date: Yup.string().required('Selecione uma data para o agendamento.'),
    times: Yup.array()
      .min(1, 'Selecione ao menos um horário disponível.')
      .min(
        requiredSlots,
        `Selecione ${slotsLabel(requiredSlots)} para os serviços escolhidos.`,
      ),
    serviceIds: Yup.array().min(1, 'Selecione ao menos um serviço.'),
    name: Yup.string().trim().required('O nome é obrigatório.'),
    phone: Yup.string().trim().required('O número de contato é obrigatório.'),
  });

export const validateBooking = ({
  date,
  times = [],
  serviceIds = [],
  name = '',
  phone = '',
} = {}) => {
  const requiredSlots = getRequiredSlots(serviceIds);

  try {
    bookingSchema({ requiredSlots }).validateSync(
      { date, times, serviceIds, name, phone },
      { abortEarly: false },
    );
    return { valid: true, errors: [] };
  } catch (error) {
    const errors = (error.inner ?? []).map((item) => ({
      field: item.path,
      message: item.message,
    }));

    return { valid: false, errors: errors.length > 0 ? errors : [{ field: 'form', message: error.message }] };
  }
};
