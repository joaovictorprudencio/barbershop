import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import Footer from '../footer/Footer';
import CardService from './cardServiços/CardService';
import { CATEGORY_LABELS, getLowestPrice, getServicesByCategory } from '../../data/services';
import { formatCurrency } from '../../utils/formats';

const Servicos = () => (
  <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container maxWidth="lg" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
      <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <ContentCutOutlinedIcon color="primary" />
          <Typography variant="h4" component="h1" fontWeight={700} color="common.white">
            Serviços
          </Typography>
        </Stack>
        <Typography variant="body1" color="rgba(255,255,255,.7)" sx={{ maxWidth: 560 }}>
          Confira a tabela completa de serviços e valores da barbearia.
        </Typography>
      </Stack>

      {CATEGORY_LABELS.map(({ id, title }) => {
        const items = getServicesByCategory(id);
        if (items.length === 0) return null;

        return (
          <Box key={id} sx={{ mb: 5 }}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6" component="h2" fontWeight={600} color="common.white">
                {title}
              </Typography>
              <Divider sx={{ flex: 1, borderColor: 'rgba(255,255,255,.2)' }} />
            </Stack>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, minmax(0, 1fr))',
                  sm: 'repeat(3, minmax(0, 1fr))',
                  lg: 'repeat(4, minmax(0, 1fr))',
                },
                gap: { xs: 1.5, md: 2 },
              }}
            >
              {items.map((item) => (
                <CardService
                  key={item.id}
                  name={item.name}
                  imagem={item.image}
                  texto={item.description}
                  preco={item.price}
                />
              ))}
            </Box>
          </Box>
        );
      })}

      <Stack spacing={0.5} alignItems="center" sx={{ mt: 4 }}>
        <Typography variant="body2" color="rgba(255,255,255,.7)">
          Menos 50% do valor é pago como reserva e o restante na barbearia.
        </Typography>
        <Typography variant="caption" color="rgba(255,255,255,.5)">
          A partir de {formatCurrency(getLowestPrice())}
        </Typography>
      </Stack>
    </Container>

    <Footer />
  </Box>
);

export default Servicos;
