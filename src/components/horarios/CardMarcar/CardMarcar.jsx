import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import Botao from "../card/botao/Botao";

const CardMarcar = () => (
  <Box sx={{ width: "100%" }}>
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        textAlign: "center",
        background: "linear-gradient(135deg, rgba(228,110,15,.16), rgba(73,73,73,.9))",
        borderColor: "primary.main",
      }}
    >
      <Stack spacing={2.5} alignItems="center">
        <EventRepeatOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h5" component="h2" fontWeight={700} color="common.white">
          Agendar um horário
        </Typography>
        <Typography variant="body2" color="rgba(255,255,255,.7)" sx={{ maxWidth: 420 }}>
          Escolha o serviço, o dia e o horário em poucos passos. A reserva é de 50% do valor e garante a sua
          vaga.
        </Typography>
        <Botao label="Agendar" />
      </Stack>
    </Paper>
  </Box>
);

export default CardMarcar;
