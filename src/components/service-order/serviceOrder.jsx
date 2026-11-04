import ServiceOrderCard from "./cards-orders/cardOrder";
import Footer from "../footer/Footer";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import { DeleteOrderDialog } from "./components/DeleteOrderDialog.jsx";
import { useListTimesToday } from "../../services/list-times-today-service.js";
import GenerateTimes from "./genarete-time/generateTimes.jsx";

const ServiceOrderList = () => {
  const { data: times = [], isLoading, isError } = useListTimesToday();
  const [openModal, setOpenModal] = useState({
    open: false,
    orderId: null,
  });

  const isEmpty = times.length === 0;

  const handleOpenModal = (id) => {
    setOpenModal({
      open: true,
      orderId: id,
    });
  };

  const handleCloseModal = () => {
    setOpenModal({
      open: false,
      orderId: null,
    });
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 6 }}>
      <DeleteOrderDialog
        open={openModal.open}
        onClose={handleCloseModal}
        orderId={openModal.orderId}
      />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={3}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-end" }}
          >
            <Stack spacing={1} sx={{ minWidth: 0 }}>
              <Typography
                variant="h4"
                component="h1"
                fontWeight={700}
                color="common.white"
              >
                Agendamentos
              </Typography>
              <Typography
                variant="body1"
                color="rgba(255,255,255,.7)"
                sx={{ maxWidth: 560 }}
              >
                Gerencie os horários agendados para hoje e crie a rotina do dia.
              </Typography>
            </Stack>

            {!isLoading && !isError && !isEmpty && (
              <Chip
                label={`${times.length} ${times.length > 1 ? "agendamentos" : "agendamento"}`}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ flexShrink: 0 }}
              />
            )}
          </Stack>

          <GenerateTimes />

          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2, sm: 3 },
              minWidth: 0,
              borderRadius: 2,
            }}
          >
            {isLoading && (
              <Stack
                spacing={2.5}
                alignItems="center"
                justifyContent="center"
                sx={{ py: { xs: 4, sm: 6 } }}
              >
                <CircularProgress size={48} />
                <Typography variant="body2" color="text.secondary">
                  Buscando horários…
                </Typography>
              </Stack>
            )}

            {!isLoading && isError && (
              <Stack spacing={1} sx={{ py: { xs: 3, sm: 4 } }}>
                <Typography variant="h6" component="h2" fontWeight={600}>
                  Não foi possível carregar a agenda
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Verifique se a API está no ar e recarregue a página para tentar novamente.
                </Typography>
              </Stack>
            )}

            {!isLoading && !isError && isEmpty && (
              <Stack
                spacing={3}
                alignItems="center"
                sx={{ py: { xs: 3, sm: 5 } }}
              >
                <EventBusyOutlinedIcon color="disabled" sx={{ fontSize: 48 }} />
                <Stack spacing={0.5} alignItems="center" sx={{ textAlign: "center" }}>
                  <Typography variant="h6" component="h2" fontWeight={600}>
                    Nenhum horário agendado
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
                    A agenda de hoje está livre. Use “Gerar Rotina” para abrir os
                    horários do dia.
                  </Typography>
                </Stack>
              </Stack>
            )}

            {!isLoading && !isError && !isEmpty && (
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ pb: 0.5 }}
                >
                  <EventAvailableOutlinedIcon color="primary" fontSize="small" />
                  <Typography
                    component="h2"
                    variant="h6"
                    fontWeight={600}
                    noWrap
                  >
                    Horários de hoje
                  </Typography>
                </Stack>

                <Stack
                  spacing={2}
                  sx={{ maxHeight: { xs: "none", md: "70vh" }, overflowY: "auto", pr: 0.5 }}
                >
                  {times.map((service, index) => (
                    <ServiceOrderCard
                      key={service.id ?? `${service.date}-${service.time}-${index}`}
                      name={service.nameCustumer || ""}
                      date={service.date || ""}
                      number={service.phoneCustumer || ""}
                      time={service.time || ""}
                      onClick={() => handleOpenModal(service.id)}
                    />
                  ))}
                </Stack>
              </Stack>
            )}
          </Paper>
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default ServiceOrderList;