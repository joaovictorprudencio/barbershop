/* eslint-disable react/prop-types */
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";

const Botao = ({ label = "Agendar", to = "/marcar/form", fullWidth = false }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="contained"
      size="large"
      fullWidth={fullWidth}
      sx={{ minHeight: 48, px: 4 }}
    >
      {label}
    </Button>
  );
};

export default Botao;
