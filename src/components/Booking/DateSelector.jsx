/* eslint-disable react/prop-types */
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { formatLongDateBR } from '../../utils/formats';


const WEEKDAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const shouldDisableDate = (date) => {
  if (!date || typeof date.day !== 'function') return false;
  // 0 = domingo
  return date.day() === 0;
};


const CALENDAR_SURFACE = {
  '& .MuiPickersCalendarHeader-label': { fontWeight: 700 },
  '& .MuiPickersArrowSwitcher-button': { width: 44, height: 44 },
  '& .MuiPickersCalendarHeader-switchViewButton': { width: 44, height: 44 },
};

const DateSelector = ({ value, onChange, error }) => (
  <Stack spacing={1.5} sx={{ minWidth: 0 }}>
    <Stack direction="row" spacing={1} alignItems="center">
      <EventAvailableOutlinedIcon color="primary" fontSize="small" />
      <Typography variant="h6" component="h3" fontWeight={600}>
        Escolha a data
      </Typography>
    </Stack>

    <Paper
      variant="outlined"
      sx={{
        p: { xs: 0.75, sm: 2 },
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'center',
        minWidth: 0,
      }}
    >
      <DatePicker
        label="Data do agendamento"
        format="DD/MM/YYYY"
        value={value}
        onChange={onChange}
        minDate={dayjs()}
        shouldDisableDate={shouldDisableDate}
        dayOfWeekFormatter={(day) => WEEKDAY_LABELS[day.day()]}
        slotProps={{
          textField: { fullWidth: true, size: 'small', error: Boolean(error) },
          paper: { sx: { borderRadius: 3 } },
          dialog: { sx: { '& .MuiPaper-root': { borderRadius: 3, ...CALENDAR_SURFACE } } },
        }}
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 360 },
          minWidth: 0,
          '& .MuiInputAdornment-positionEnd .MuiIconButton-root': { width: 44, height: 44 },
        }}
      />
    </Paper>

    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={0.5}
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      justifyContent="space-between"
    >
      <Typography variant="body2" color="text.secondary">
        Hoje: {formatLongDateBR(dayjs())}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Fechado aos domingos
      </Typography>
    </Stack>
  </Stack>
);

export default DateSelector;
