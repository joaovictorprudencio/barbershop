import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EventBusyOutlinedIcon from "@mui/icons-material/EventBusyOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { OPENING_HOURS } from "../../../data/openingHours";
import CardShell from "../CardShell";

const formatHour = (hour) => `${String(hour).padStart(2, "0")}:00`;


const SHIFTS = [
  { id: "manha", label: "Manhã", start: OPENING_HOURS.startHour, end: OPENING_HOURS.breakStart },
  { id: "tarde", label: "Tarde", start: OPENING_HOURS.breakEnd, end: OPENING_HOURS.endHour },
];

const Marcar = () => (
  <CardShell
    icon={<ScheduleOutlinedIcon color="primary" fontSize="small" />}
    title="Horários de funcionamento"
    meta={<Chip label="Seg a sáb" size="small" variant="outlined" />}
  >
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
        gap: 1,
      }}
    >
      {SHIFTS.map((shift) => (
        <Box key={shift.id} sx={{ p: 1.75, borderRadius: 1, bgcolor: "action.hover" }}>
          <Typography variant="caption" color="text.secondary">
            {shift.label}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}
          >
            {formatHour(shift.start)} – {formatHour(shift.end)}
          </Typography>
        </Box>
      ))}
    </Box>

    <Stack direction="row" spacing={1} alignItems="center">
      <EventBusyOutlinedIcon fontSize="small" color="disabled" />
      <Typography variant="body2" color="text.secondary">
        Fechado aos domingos.
      </Typography>
    </Stack>
  </CardShell>
);

export default Marcar;
