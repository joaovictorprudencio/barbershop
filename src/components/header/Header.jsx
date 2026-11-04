import Horarios from "../horarios/horarios";
import Home from "../home/Home";
import logo from "./img/logo.png";
import Botao from "../horarios/card/botao/Botao";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";
import Servicos from "../serviços/Servicos";
import BookmarkPage from "../Bookmark/bookmarkPage";
import Login from "../login/login";
import ServiceOrder from "../service-order/serviceOrder";

const LINKS = [
  { to: "/", label: "Barbearia" },
  { to: "/horarios", label: "Horários" },
  { to: "/serviços", label: "Serviços" },
];

const Header = () => {
  return (
    <div>
      <Router>
        <Box component="nav" className={styles.header}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 3 }}
              alignItems="center"
              justifyContent="space-between"
              sx={{ py: 1.5 }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <NavLink
                  to="/login"
                  aria-label="Página inicial"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 44,
                    minHeight: 44,
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="Barbershop"
                    className={styles.logo}
                    sx={{ width: 40, height: 40 }}
                  />
                </NavLink>
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={700}
                  sx={{ color: "common.white" }}
                >
                  barbershop
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 4 }}
                alignItems="center"
                justifyContent={{ xs: "space-between", sm: "flex-end" }}
                component="ul"
                className={styles.lista}
                sx={{ p: 0, m: 0, listStyle: "none", flexWrap: "wrap" }}
              >
                {LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className={({ isActive }) => (isActive ? styles.active : "")}
                      style={{ textDecoration: "none" }}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agendamentos" element={<ServiceOrder />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/serviços" element={<Servicos />} />
          <Route path="/marcar" element={<Botao />} />
          <Route path="/marcar/form" element={<BookmarkPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
