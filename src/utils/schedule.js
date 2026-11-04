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


export const selectBookableSlots = ({ date, existingTimes = [] } = {}) => {
  const dayKey = toApiDate(date);
  if (!dayKey) return { slots: [], takenCount: 0, routineGenerated: false };

  
  const rows = existingTimes.filter((row) => belongsToDay(row.date, dayKey));

 
  const taken = new Set(
    rows.filter((row) => row.available === false).map((row) => row.time)
  );

  
  const availableFromApi = new Set(
    rows.filter((row) => row.available === true).map((row) => row.time)
  );

  const isToday = dayjs(date).isSame(dayjs(), 'day');
  const slots = ALL_SLOTS.filter((time) => {
  
    if (availableFromApi.has(time)) return true;
   
    if (taken.has(time)) return false;
    if (!isToday) return true;
    return dayjs().isBefore(dayjs(`${dayKey}T${time}`), 'minute');
  });

  return { slots, takenCount: taken.size, routineGenerated: rows.length > 0 };
};
