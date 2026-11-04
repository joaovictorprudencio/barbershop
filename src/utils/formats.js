import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pt-br';
import { BUSINESS_TZ } from '../data/openingHours';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('pt-br');

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const asDayjs = (value) => {
  if (!value) return dayjs();
  const date = typeof value.isDayjsObject === 'function' && value.isDayjsObject() ? value : dayjs(value);
  return date.isValid() ? date : dayjs();
};

export const formatCurrency = (value = 0) => currencyFormatter.format(Number(value) || 0);


const parseApiDate = (value) => {
  const d = asDayjs(value);
  if (!d.isValid()) return d;
 
  if (!value || value.length <= 10) {
    return dayjs.tz(value, 'YYYY-MM-DD', BUSINESS_TZ);
  }
 
  const iso = d.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  const isMidnightUtc = iso.endsWith('T00:00:00.000Z');
  const isMidnightSp = iso.endsWith('T03:00:00.000Z');
  if (isMidnightUtc || isMidnightSp) {
    const dateOnly = d.format('YYYY-MM-DD');
    return dayjs.tz(dateOnly, 'YYYY-MM-DD', BUSINESS_TZ);
  }
  return d.tz(BUSINESS_TZ);
};

export const formatDateBR = (value) => (value ? parseApiDate(value).format('DD/MM/YYYY') : '');

export const formatLongDateBR = (value) =>
  value ? parseApiDate(value).format('dddd, DD [de] MMMM [de] YYYY') : '';

export const formatTimeBR = (value) => (value ? parseApiDate(value).format('HH:mm') : '');

export const toApiDate = (value) => (value ? parseApiDate(value).format('YYYY-MM-DD') : '');

export const formatPhoneBR = (value = '') => {
  const digits = String(value).replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};
