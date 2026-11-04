/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { RESERVATION_PERCENTAGE } from '../../data/services';
import { formatCurrency, formatDateBR } from '../../utils/formats';

const Row = ({ icon, label, value, emphasis = false }) => (
  <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
    <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0, flex: 1 }}>
      {icon}
      <Typography variant="body2" color="text.secondary" sx={{ minWidth: 0 }}>
        {label}
      </Typography>
    </Stack>
    <Typography
      variant="body2"
      fontWeight={emphasis ? 700 : 600}
      color="text.primary"
      sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
    >
      {value}
    </Typography>
  </Stack>
);

const BookingSummary = ({ date, times = [], services = [], total, reservationAmount, requiredSlots = 1 }) => (
  <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
    <Stack spacing={2.5}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ReceiptLongOutlinedIcon color="primary" fontSize="small" />
        <Typography variant="h6" component="h3" fontWeight={600}>
          Resumo do agendamento
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        <Row
          icon={<CalendarMonthOutlinedIcon fontSize="small" color="disabled" />}
          label="Data"
          value={formatDateBR(date)}
        />
        <Row
          icon={<ScheduleOutlinedIcon fontSize="small" color="disabled" />}
          label={times.length > 1 ? 'Horários' : 'Horário'}
          value={times.length > 0 ? times.join(' · ') : '—'}
        />
        {times.length > 1 && (
          <Row
            icon={<ScheduleOutlinedIcon fontSize="small" color="disabled" />}
            label="Horários necessários"
            value={String(requiredSlots)}
          />
        )}
      </Stack>

      <Divider />

      <Stack spacing={1.5}>
        <Typography variant="subtitle2" color="text.secondary">
          Serviços selecionados
        </Typography>

        {services.length === 0 ? (
          <Typography variant="body2" color="text.disabled">
            Nenhum serviço selecionado.
          </Typography>
        ) : (
          services.map((service) => (
            <Stack
              key={service.id}
              direction="row"
              justifyContent="space-between"
              spacing={2}
              sx={{ minWidth: 0 }}
            >
              <Typography variant="body2" sx={{ minWidth: 0, wordBreak: 'break-word' }}>
                {service.name}
              </Typography>
              <Typography variant="body2" fontWeight={600} sx={{ whiteSpace: 'nowrap' }}>
                {formatCurrency(service.price)}
              </Typography>
            </Stack>
          ))
        )}

        <Divider />

        <Row label="Total" value={formatCurrency(total)} emphasis />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            px: 1.5,
            py: 1,
            borderRadius: 2,
            bgcolor: 'action.hover',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Reserva ({RESERVATION_PERCENTAGE * 100}%)
          </Typography>
          <Typography variant="body1" fontWeight={700} color="primary.main" sx={{ whiteSpace: 'nowrap' }}>
            {formatCurrency(reservationAmount)}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  </Paper>
);

export default BookingSummary;
