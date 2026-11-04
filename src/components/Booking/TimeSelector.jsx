/* eslint-disable react/prop-types */
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { getPendingSlotMessage } from './bookingRules';

const SKELETON_COUNT = 12;

const GRID_COLUMNS = {
  xs: 'repeat(2, minmax(0, 1fr))',
  sm: 'repeat(3, minmax(0, 1fr))',
  md: 'repeat(4, minmax(0, 1fr))',
};

const TimeSelector = ({
  times = [],
  value = [],
  onChange,
  loading = false,
  dateLabel,
  requiredSlots = 1,
  serviceIds = [],
  routineGenerated = true,
}) => {
  const hasTimes = times.length > 0;
  const selected = Array.isArray(value) ? value : [value].filter(Boolean);
  const missing = Math.max(0, requiredSlots - selected.length);
  const locked = selected.length >= requiredSlots;
  const pendingMessage = getPendingSlotMessage(serviceIds, selected.length);

  return (
    <Stack spacing={2} sx={{ minWidth: 0 }}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={0.5}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <AccessTimeOutlinedIcon color="primary" fontSize="small" />
          <Typography variant="h6" component="h3" fontWeight={600}>
            Horários disponíveis
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flexWrap: 'wrap' }}>
          {dateLabel && (
            <Typography variant="body2" color="text.secondary">
              {dateLabel}
            </Typography>
          )}
          {requiredSlots > 0 && (
            <Chip
              size="small"
              color={missing > 0 ? 'warning' : 'success'}
              variant={missing > 0 ? 'filled' : 'outlined'}
              icon={missing > 0 ? <GroupsOutlinedIcon /> : <CheckCircleOutlineOutlinedIcon />}
              label={
                missing > 0
                  ? `${selected.length} de ${requiredSlots} horário${requiredSlots > 1 ? 's' : ''}`
                  : 'Horários completos'
              }
            />
          )}
        </Stack>
      </Stack>


      {!loading && hasTimes && !routineGenerated && (
        <Alert severity="info" icon={<InfoOutlinedIcon />} variant="outlined">
          A rotina deste dia ainda não foi gerada. Estes horários estão livres e são reservados
          assim que você confirmar o agendamento.
        </Alert>
      )}

    
      {!loading && hasTimes && selected.length > 0 && missing > 0 && (
        <Alert severity="warning" icon={<GroupsOutlinedIcon />}>
          {pendingMessage}
        </Alert>
      )}

      {loading && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: GRID_COLUMNS,
            gap: 1,
          }}
        >
          {Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <Skeleton key={index} variant="rounded" height={48} sx={{ borderRadius: 3 }} />
          ))}
        </Box>
      )}

      {!loading && !hasTimes && (
        <Alert severity="info" icon={<EventBusyOutlinedIcon />} variant="outlined">
          Não há horários disponíveis para esta data. Escolha outro dia no calendário.
        </Alert>
      )}

      {!loading && hasTimes && (
        <Box
          role="group"
          aria-label="Horários disponíveis"
          sx={{
            display: 'grid',
            gridTemplateColumns: GRID_COLUMNS,
            gap: 1,
          }}
        >
          {times.map((time) => {
            const isSelected = selected.includes(time);
            const isDisabled = !isSelected && locked;
            return (
              <Button
                key={time}
                aria-pressed={isSelected}
                disabled={isDisabled}
                variant={isSelected ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => onChange(time)}
                sx={{
                  minHeight: 48,
                  borderRadius: 3,
                  fontVariantNumeric: 'tabular-nums',
                  fontWeight: isSelected ? 700 : 500,
                  px: 1,
                  minWidth: 0,
                }}
              >
                {time}
              </Button>
            );
          })}
        </Box>
      )}
    </Stack>
  );
};

export default TimeSelector;
