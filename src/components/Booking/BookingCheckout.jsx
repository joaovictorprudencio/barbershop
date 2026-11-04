/* eslint-disable react/prop-types */
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BookingSummary from './BookingSummary';
import PaymentPanel from './PaymentPanel';
import { RESERVATION_RULE_TEXT } from '../../data/services';
import { formatCurrency } from '../../utils/formats';

const BookingCheckout = ({
  date,
  times,
  services,
  total,
  reservationAmount,
  requiredSlots,
  multipleSlotsRequired,
  customer,
  onCustomerChange,
  onBack,
  onConfirm,
  loading = false,
  error,
  pixKey,
}) => (

  <Box
    sx={{
      display: { xs: 'flex', md: 'grid' },
      flexDirection: 'column',
      gridTemplateColumns: { md: 'minmax(0, 7fr) minmax(0, 5fr)' },
      gap: { xs: 2, md: 3 },
      alignItems: 'start',
    }}
  >
    <Box
      sx={{
        display: { xs: 'contents', md: 'flex' },
        flexDirection: 'column',
        gap: { md: 3 },
        minWidth: 0,
        width: '100%',
      }}
    >
      <Box sx={{ order: 1, minWidth: 0, width: '100%' }}>
        <BookingSummary
          date={date}
          times={times}
          services={services}
          total={total}
          reservationAmount={reservationAmount}
          requiredSlots={requiredSlots}
        />
      </Box>

      <Box sx={{ order: 2, minWidth: 0, width: '100%' }}>
        <Stack spacing={1.5}>
          {multipleSlotsRequired && (
            <Alert severity="success" icon={<CheckCircleOutlineOutlinedIcon />}>
              {times.length} horário{times.length > 1 ? 's' : ''} marcado
              {times.length > 1 ? 's' : ''} para {services.map((service) => service.name).join(' e ')}.
            </Alert>
          )}

          <Alert severity="info" icon={<PaymentsOutlinedIcon />}>
            {RESERVATION_RULE_TEXT}
          </Alert>
        </Stack>
      </Box>

      <Box sx={{ order: 4, minWidth: 0, width: '100%' }}>
        <PaymentPanel
          pixKey={pixKey}
          amount={reservationAmount}
          message={`referente ao agendamento de ${formatCurrency(total)}`}
        />
      </Box>
    </Box>

    <Box
      sx={{
        display: { xs: 'contents', md: 'flex' },
        flexDirection: 'column',
        gap: { md: 2 },
        minWidth: 0,
        width: '100%',
      }}
    >
      <Box sx={{ order: 3, minWidth: 0, width: '100%' }}>
        <Stack spacing={2} component="form" onSubmit={(event) => event.preventDefault()}>
          <Typography variant="h6" component="h3" fontWeight={600}>
            Seus dados
          </Typography>

          <TextField
            label="Nome"
            name="name"
            value={customer.name}
            onChange={onCustomerChange('name')}
            fullWidth
            required
            autoComplete="name"
          />

          <TextField
            label="Número de contato"
            name="phone"
            value={customer.phone}
            onChange={onCustomerChange('phone')}
            fullWidth
            required
            autoComplete="tel"
            inputMode="tel"
          />

          {error && (
            <Alert severity="error" variant="outlined">
              {error.message}
            </Alert>
          )}
        </Stack>
      </Box>

      <Box
        sx={{
          order: 5,
          minWidth: 0,
          width: '100%',
          position: { xs: 'sticky', sm: 'static' },
          bottom: { xs: 0, sm: 'auto' },
          zIndex: { xs: 2, sm: 'auto' },
          mt: { xs: 1, sm: 0 },
          py: { xs: 1.5, sm: 0 },
          bgcolor: { xs: 'background.paper', sm: 'transparent' },
          borderTop: { xs: '1px solid', sm: 'none' },
          borderColor: { xs: 'divider', sm: 'transparent' },
        }}
      >
        <Stack direction={{ xs: 'row', sm: 'column' }} spacing={1.5} alignItems="stretch">
          <Button
            variant="text"
            aria-label="Voltar para data e horário"
            startIcon={<ArrowBackOutlinedIcon />}
            onClick={onBack}
            disabled={loading}
            sx={{
              minHeight: 44,
              minWidth: 44,
              flexShrink: { xs: 0, sm: 1 },
              alignSelf: { xs: 'center', sm: 'flex-start' },
              px: { xs: 1, sm: 2 },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              Voltar para horários
            </Box>
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={onConfirm}
            disabled={loading}
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <CheckCircleOutlineOutlinedIcon />
              )
            }
            sx={{ minHeight: 48, fontSize: '1rem', flex: { xs: 1, sm: 'initial' }, minWidth: 0 }}
          >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
              {loading ? 'Confirmando...' : 'Confirmar agendamento'}
            </Box>
            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
              {loading ? 'Aguarde...' : 'Confirmar'}
            </Box>
          </Button>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default BookingCheckout;
