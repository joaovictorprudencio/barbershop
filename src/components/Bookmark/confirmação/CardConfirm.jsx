/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { whatsappLink } from '../../Booking/bookingRules';
import { formatCurrency, formatDateBR } from '../../../utils/formats';

const Detail = ({ label, value }) => (
  <Stack direction="row" spacing={2} justifyContent="space-between">
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body2" fontWeight={600} sx={{ textAlign: 'right' }}>
      {value}
    </Typography>
  </Stack>
);

const CardConfirm = ({ confirmation }) => {
  const navigate = useNavigate();
  const { date, times = [], services = [], total, reservationAmount } = confirmation ?? {};

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        maxWidth: 560,
        mx: 'auto',
        textAlign: 'center',
        borderColor: 'success.main',
      }}
    >
      <Stack spacing={3} alignItems="center">
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 72 }} />

        <Stack spacing={1}>
          <Typography variant="h5" component="h2" fontWeight={700}>
            Agendamento confirmado
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Envie o comprovante do Pix para concluir a sua reserva.
          </Typography>
        </Stack>

        <Divider sx={{ width: '100%' }} />

        <Stack spacing={1.5} sx={{ width: '100%' }}>
          <Detail label="Data" value={formatDateBR(date)} />
          <Detail
            label={times.length > 1 ? 'Horários' : 'Horário'}
            value={times.length > 0 ? times.join(' · ') : '—'}
          />
          <Detail
            label="Serviços"
            value={services.map((service) => service.name).join(', ') || '—'}
          />
          <Detail label="Total" value={formatCurrency(total)} />
          <Detail label="Reserva (50%)" value={formatCurrency(reservationAmount)} />
        </Stack>

        <Box sx={{ width: '100%' }}>
          <Button
            fullWidth
            variant="contained"
            color="success"
            size="large"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
          >
            Enviar comprovante do Pix
          </Button>
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ width: '100%' }}
        >
          <Button fullWidth variant="outlined" onClick={() => navigate('/horarios')}>
            Ver horários
          </Button>
          <Button fullWidth variant="text" onClick={() => navigate('/')}>
            Voltar ao início
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CardConfirm;
