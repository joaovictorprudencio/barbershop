
export const BUSINESS_TZ = 'America/Sao_Paulo';

export const OPENING_HOURS = {
  startHour: 9,
  endHour: 20,
  breakStart: 12,
  breakEnd: 14,
  stepMinutes: 30,
};

const buildSlotGrid = () => {
  const slots = [];
  for (let hour = OPENING_HOURS.startHour; hour < OPENING_HOURS.endHour; hour += 1) {
    const isBreakTime = hour >= OPENING_HOURS.breakStart && hour < OPENING_HOURS.breakEnd;
    if (isBreakTime) continue;
    for (let minute = 0; minute < 60; minute += OPENING_HOURS.stepMinutes) {
      slots.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
    }
  }
  return slots;
};

/** Os 18 horários de um dia: 09:00–11:30 e 14:00–19:30. */
export const ALL_SLOTS = buildSlotGrid();
