/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { formatDateBR } from "../../../../utils/formats";

const BARBER_NAME = "Maikon";

const Item = ({ Horario }) => {
  const { date, time } = Horario ?? {};

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        minWidth: 0,
        px: 1.75,
        py: 1.25,
        borderRadius: 5,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        component="p"
        fontWeight={700}
        sx={{ fontVariantNumeric: "tabular-nums", lineHeight: 1.2, fontSize: "1.05rem" }}
      >
        {time}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
      
        <Typography variant="body2" color="text.secondary" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
          {formatDateBR(date)}
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            width: 4,
            height: 4,
            flexShrink: 0,
            borderRadius: "50%",
            bgcolor: "text.disabled",
          }}
        />
        <Typography variant="body2" color="text.secondary" noWrap>
          {BARBER_NAME}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Item;
