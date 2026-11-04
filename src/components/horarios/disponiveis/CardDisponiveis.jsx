import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import listTimesAvailable from "../../../services/times-available";
import CardShell from "../CardShell";
import Item from "./item/Itens";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { BUSINESS_TZ } from "../../../data/openingHours";
import { isPastSlotToday } from "../../../utils/schedule";

dayjs.extend(utc);
dayjs.extend(timezone);

const CardDisponiveis = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const getListTimesAvailable = async () => {
      const data = await listTimesAvailable();
      
      const flattened = Array.isArray(data) ? data.flat() : [];

      
      const todayKey = dayjs().tz(BUSINESS_TZ).format("YYYY-MM-DD");
      const todayTimes = flattened
        .filter((t) => {
          const d = dayjs(t?.date);
          return d.isValid() && d.tz(BUSINESS_TZ).format("YYYY-MM-DD") === todayKey;
        })
        
        .filter(
          (t) => /^\d{2}:\d{2}$/.test(t?.time ?? "") && !isPastSlotToday(todayKey, t.time),
        );

      if (active) setTimes(todayTimes);
      if (active) setLoading(false);
    };

    getListTimesAvailable();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <Paper variant="outlined" sx={{ p: 4, display: "flex", justifyContent: "center" }}>
        <CircularProgress size="3rem" />
      </Paper>
    );
  }

  if (times.length === 0) {
    return (
      <CardShell
        icon={<EventBusyOutlinedIcon color="disabled" fontSize="small" />}
        title="Nenhum horário livre hoje"
      >
        <Typography variant="body2" color="text.secondary">
          A agenda de hoje já está completa. Use o botão Agendar para ver os próximos dias disponíveis.
        </Typography>
      </CardShell>
    );
  }

  return (
    <CardShell
      icon={<EventAvailableOutlinedIcon color="primary" fontSize="small" />}
      title="Disponíveis para hoje"
      meta={
        <Chip
          label={`${times.length} ${times.length > 1 ? "horários" : "horário"}`}
          size="small"
          color="primary"
          variant="outlined"
          sx={{ flexShrink: 0 }}
        />
      }
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
          gap: 1,
        }}
      >
        {times.map((time, index) => (
          <Item key={time?.id ?? `${time?.time}-${index}`} Horario={time} />
        ))}
      </Box>
    </CardShell>
  );
};

export default CardDisponiveis;
