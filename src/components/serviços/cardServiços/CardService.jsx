/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import { formatCurrency } from '../../../utils/formats';

const CardService = ({
  name,
  titulo,
  imagem,
  texto,
  preco,
  selectable = false,
  selected = false,
  onToggle,
}) => {
  const title = name ?? titulo;
  const price =
    typeof preco === 'number' ? preco : Number.parseFloat(String(preco ?? '').replace(',', '.'));
  const priceLabel = formatCurrency(price);

  const stateIcon = selected ? (
    <CheckCircleOutlineIcon color="primary" fontSize="small" />
  ) : (
    <RadioButtonUncheckedOutlinedIcon color="disabled" fontSize="small" />
  );

  
  const fullBody = (
    <Stack spacing={1} sx={{ height: '100%' }}>
      {imagem ? (
        <CardMedia
          component="img"
          height="140"
          image={imagem}
          alt={title}
          sx={{ objectFit: 'cover', height: { xs: 96, sm: 140 } }}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: 72, bgcolor: 'action.hover', color: 'primary.main', flexShrink: 0 }}
        >
          <SpaOutlinedIcon fontSize="large" />
        </Stack>
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 0.5,
          p: { xs: 1.25, sm: 2 },
        }}
      >
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={1}
          sx={{ flexWrap: 'wrap' }}
        >
          <Typography
            variant="h6"
            component="h3"
            fontWeight={600}
            sx={{
              minWidth: 0,
              wordBreak: 'break-word',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            {title}
          </Typography>
          <Chip
            size="small"
            label={priceLabel}
            color="primary"
            variant={selected ? 'filled' : 'outlined'}
            sx={{ flexShrink: 0 }}
          />
        </Stack>

        {texto && (
          <Typography variant="body2" color="text.secondary">
            {texto}
          </Typography>
        )}

        {selectable && (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ mt: 'auto', pt: 1 }}
          >
            {stateIcon}
            <Typography
              variant="caption"
              color={selected ? 'primary.main' : 'text.secondary'}
            >
              {selected ? 'Selecionado' : 'Adicionar ao agendamento'}
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Stack>
  );

  if (!selectable) {
    return (
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          minWidth: 0,
          transition: 'border-color .2s',
          '&:hover': { borderColor: 'primary.main' },
        }}
      >
        {fullBody}
      </Card>
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        minWidth: 0,
        borderColor: selected ? 'primary.main' : 'divider',
        borderWidth: selected ? 2 : 1,
        transition: 'border-color .2s, box-shadow .2s',
        boxShadow: selected ? 2 : 0,
      }}
    >
      <CardActionArea
        onClick={onToggle}
        aria-pressed={selected}
        sx={{ height: '100%', alignItems: 'stretch' }}
      >
       
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.25}
          sx={{ display: { xs: 'flex', sm: 'none' }, px: 1.5, py: 1.25, minHeight: 64 }}
        >
          {stateIcon}
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ flex: 1, minWidth: 0, wordBreak: 'break-word' }}
          >
            {title}
          </Typography>
          <Chip
            size="small"
            label={priceLabel}
            color="primary"
            variant={selected ? 'filled' : 'outlined'}
            sx={{ flexShrink: 0 }}
          />
        </Stack>

       
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>{fullBody}</Box>
      </CardActionArea>
    </Card>
  );
};

export default CardService;
