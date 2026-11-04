/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';
import Alert from '@mui/material/Alert';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { CATEGORY_LABELS, SERVICES, getServicesByCategory } from '../../data/services';
import { getMultiSlotMessage, getRequiredSlots, getTotal } from './bookingRules';
import { formatCurrency } from '../../utils/formats';
import CardService from '../serviços/cardServiços/CardService';

const ServiceSelector = ({ services = SERVICES, selectedServices = [], onToggle }) => {
  const selectedIds = useMemo(() => new Set(selectedServices.map((service) => service.id)), [selectedServices]);
  const selectionCount = selectedServices.length;
  const requiredSlots = getRequiredSlots([...selectedIds]);
  const total = getTotal([...selectedIds]);


  const groups = useMemo(
    () =>
      CATEGORY_LABELS.map(({ id, title }) => ({
        id,
        title,
        items: getServicesByCategory(id, services),
      })).filter((group) => group.items.length > 0),
    [services],
  );

  const [activeCategory, setActiveCategory] = useState(groups[0]?.id ?? null);
  const activeGroup = groups.find((group) => group.id === activeCategory) ?? groups[0];
  const activeItems = activeGroup?.items ?? [];

  const countSelectedIn = (items) => items.reduce((acc, item) => acc + (selectedIds.has(item.id) ? 1 : 0), 0);

  return (
    <Stack spacing={2} sx={{ minWidth: 0 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ContentCutOutlinedIcon color="primary" fontSize="small" />
        <Typography variant="h6" component="h3" fontWeight={600}>
          Escolha os serviços
        </Typography>
      </Stack>


      <Paper
        variant="outlined"
        sx={{
          position: 'sticky',
          top: 8,
          zIndex: 2,
          p: 1.5,
          borderRadius: 3,
          minWidth: 0,
          boxShadow: selectionCount > 0 ? 2 : 0,
          transition: 'box-shadow .2s',
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
            <ReceiptLongOutlinedIcon
              color={selectionCount > 0 ? 'primary' : 'disabled'}
              fontSize="small"
            />
            <Typography variant="body2" color="text.secondary" sx={{ minWidth: 0 }}>
              {selectionCount === 0
                ? 'Nenhum serviço selecionado'
                : `${selectionCount} serviço${selectionCount > 1 ? 's' : ''} · ${requiredSlots} horário${
                    requiredSlots > 1 ? 's' : ''
                  }`}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color={selectionCount > 0 ? 'primary.main' : 'text.disabled'}
            sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            {formatCurrency(total)}
          </Typography>
        </Stack>
      </Paper>

 
      <Stack role="group" aria-label="Categorias de serviço" direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
        {groups.map((group) => {
          const isActive = group.id === activeGroup?.id;
          const selectedInGroup = countSelectedIn(group.items);

          return (
            <Badge
              key={group.id}
              badgeContent={selectedInGroup}
              color="success"
              invisible={selectedInGroup === 0}
              overlap="circular"
            >
              <Chip
                component="button"
                clickable
                label={group.title}
                color={isActive ? 'primary' : 'default'}
                variant={isActive ? 'filled' : 'outlined'}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(group.id)}
                sx={{ minHeight: 40, borderRadius: 3, fontWeight: 600 }}
              />
            </Badge>
          );
        })}
      </Stack>

      <Box
        role="group"
        aria-label={activeGroup ? `Serviços de ${activeGroup.title}` : 'Serviços'}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: 1.5,
        }}
      >
        {activeItems.map((service) => (
          <CardService
            key={service.id}
            name={service.name}
            imagem={service.image}
            texto={service.description}
            preco={service.price}
            selectable
            selected={selectedIds.has(service.id)}
            onToggle={() => onToggle(service)}
          />
        ))}
      </Box>

      {requiredSlots > 1 && (
        <Alert severity="warning" icon={<GroupsOutlinedIcon />}>
          {getMultiSlotMessage([...selectedIds])}
        </Alert>
      )}

      <Divider flexItem />

      <Alert severity="info" icon={<GroupsOutlinedIcon />} variant="outlined">
        Cada serviço ocupa um horário. Selecione mais de um e, na próxima etapa, marque {requiredSlots} horário
        {requiredSlots > 1 ? 's' : ''}.
      </Alert>
    </Stack>
  );
};

export default ServiceSelector;
