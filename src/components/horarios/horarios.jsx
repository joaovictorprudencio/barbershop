import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Marcar from "./card/Marcar";
import CardDisponiveis from "./disponiveis/CardDisponiveis";
import Footer from "../footer/Footer";
import CardMarcar from "./CardMarcar/CardMarcar";

const Horarios = () => (
  <Box sx={{ bgcolor: "background.default", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Container maxWidth="md" sx={{ flex: 1, py: { xs: 4, md: 6 } }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h4" component="h1" fontWeight={700} color="common.white">
            Agende seu horário
          </Typography>
          <Typography variant="body1" color="rgba(255,255,255,.7)" sx={{ maxWidth: 560 }}>
            Veja as vagas de hoje, confira quando abrimos e reserve em poucos passos.
          </Typography>
        </Stack>

       
        <CardMarcar />
        <CardDisponiveis />
        <Marcar />
      </Stack>
    </Container>

    <Footer />
  </Box>
);

export default Horarios;
