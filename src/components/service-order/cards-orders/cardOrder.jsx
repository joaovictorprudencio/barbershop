/* eslint-disable react/prop-types */
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { formatDateBR } from "../../../utils/formats";


const CardOrder = ({ name, number, date, time, onClick }) => {
  const formattedDate = formatDateBR(date);
  const displayName = name?.trim() || "Cliente não informado";

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 1.75, sm: 2.25 },
      
        borderRadius: 1,
        bgcolor: "background.paper",
        borderColor: "divider",
        transition: "border-color .2s, box-shadow .2s",
        "&:hover": {
          borderColor: "primary.light",
          boxShadow: "0 2px 12px rgba(0,0,0,.12)",
        },
        "&:focus-within": {
          borderColor: "primary.main",
        },
      }}
    >
      <Stack direction="row" spacing={1} alignItems="flex-start">
        <Stack spacing={1.25} sx={{ flex: 1, minWidth: 0 }}>
        
          <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
            <Box
              sx={{
                flexShrink: 0,
                minWidth: 66,
                py: 0.5,
                px: 1,
                borderRadius: 1,
                textAlign: "center",
                bgcolor: "rgba(228,110,15,.14)",
                border: "1px solid rgba(228,110,15,.35)",
              }}
            >
              <Typography
                component="p"
                fontWeight={700}
                noWrap
                sx={{
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1.25,
                  fontSize: "1.05rem",
                  color: "primary.dark",
                }}
              >
                {time || "--:--"}
              </Typography>
            </Box>

            <Chip
              label={formattedDate}
              size="small"
              variant="outlined"
              sx={{
                display: "flex",
                flexShrink: 0,
                borderColor: "divider",
                color: "text.secondary",
              }}
            />
          </Stack>

          
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ minWidth: 0 }}>
            <Avatar
              sx={{
                flexShrink: 0,
                width: 38,
                height: 38,
                bgcolor: "rgba(228,110,15,.14)",
                color: "primary.dark",
              }}
            >
              <PersonOutlineIcon fontSize="small" />
            </Avatar>

            <Stack spacing={0.25} sx={{ minWidth: 0 }}>
              <Typography
                component="p"
                fontWeight={600}
                color="text.primary"
                noWrap
                title={displayName}
              >
                {displayName}
              </Typography>

              {number ? (
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ minWidth: 0 }}>
                  <PhoneOutlinedIcon
                    sx={{ fontSize: 15, flexShrink: 0, color: "text.disabled" }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                    sx={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {number}
                  </Typography>
                </Stack>
              ) : (
                <Typography variant="body2" color="text.disabled" noWrap>
                  Sem telefone
                </Typography>
              )}
            </Stack>
          </Stack>
        </Stack>

        <Box sx={{ flexShrink: 0, ml: 0.5 }}>
          <IconButton
            onClick={onClick}
            aria-label={`Desmarcar agendamento das ${time}`}
            color="error"
            sx={{ minWidth: 44, minHeight: 44, mr: -1 }}
          >
            <DeleteOutlineIcon sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default CardOrder;
