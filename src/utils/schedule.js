import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ALL_SLOTS, BUSINESS_TZ } from '../data/openingHours';
import { toApiDate } from './formats';

dayjs.extend(utc);
dayjs.extend(timezone);


export const toBusinessDayKey = (value) => {
  const date = dayjs(value);
  return date.isValid() ? date.tz(BUSINESS_TZ).format('YYYY-MM-DD') : '';
};


const belongsToDay = (value, dayKey) => {
  const date = dayjs(value);
  if (!date.isValid()) return false;
  return (
    date.tz(BUSINESS_TZ).format('YYYY-MM-DD') === dayKey ||
    date.utc().format('YYYY-MM-DD') === dayKey
  );
};


export const isPastSlotToday = (dayKey, time) => {
  const now = dayjs().tz(BUSINESS_TZ);
  if (dayKey !== now.format('YYYY-MM-DD')) return false;

  const slot = dayjs.tz(`${dayKey}T${time}`, 'YYYY-MM-DDTHH:mm', BUSINESS_TZ);
  return !slot.isValid() || !now.isBefore(slot, 'minute');
};


export const selectBookableSlots = ({ date, existingTimes = [] } = {}) => {
  const dayKey = toApiDate(date);
  if (!dayKey) return { slots: [], takenCount: 0, routineGenerated: false };

  const rows = existingTimes.filter((row) => belongsToDay(row.date, dayKey));

  const taken = new Set(
    rows.filter((row) => row.available === false).map((row) => row.time)
  );

  const slots = ALL_SLOTS.filter((time) => {
   
    if (isPastSlotToday(dayKey, time)) return false;
   
    if (taken.has(time)) return false;
   
    return true;
  });

  return { slots, takenCount: taken.size, routineGenerated: rows.length > 0 };
};
