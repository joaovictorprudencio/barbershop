import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";

const generateRoutine = async () =>
  axios.get(`${import.meta.env.VITE_API_URL}/times/config`, {
    headers: {
      "Content-Type": "application/json",
    },
  });


const GenerateTimes = () => {
  const queryClient = useQueryClient();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { mutate: generateTime, isPending } = useMutation({
    mutationFn: generateRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listTimesToday"] });
      setSnackbar({
        open: true,
        message: "Rotina do dia gerada.",
        severity: "success",
      });
    },
    onError: () => {
      setSnackbar({
        open: true,
        message: "Não foi possível gerar a rotina. Tente novamente.",
        severity: "error",
      });
    },
  });

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, sm: 3 },
          minWidth: 0,
          borderRadius: 2,
          bgcolor: "background.paper",
          borderColor: "divider",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ minWidth: 0 }}>
            <EventRepeatOutlinedIcon color="primary" sx={{ flexShrink: 0 }} />
            <Box sx={{ minWidth: 0 }}>
              <Typography component="p" fontWeight={600} color="text.primary" noWrap>
                Rotina do dia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cria os horários livres de hoje, pulando os já existentes.
              </Typography>
            </Box>
          </Stack>

          <Button
            variant="contained"
            size="large"
            onClick={() => generateTime()}
            disabled={isPending}
            sx={{ flexShrink: 0, minHeight: 48, px: 4 }}
          >
            {isPending ? (
              <>
                <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                Gerando…
              </>
            ) : (
              "Gerar Rotina"
            )}
          </Button>
        </Stack>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default GenerateTimes;
