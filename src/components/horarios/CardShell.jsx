/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


const CardShell = ({ icon, title, meta, children }) => (
  <Paper
    variant="outlined"
    sx={{
      p: { xs: 2, sm: 3 },
      minWidth: 0,
    }}
  >
    <Stack spacing={2.5}>
      <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
          {icon}
          <Typography component="h2" variant="h6" fontWeight={600} noWrap>
            {title}
          </Typography>
        </Stack>
        {meta}
      </Stack>

      {children}
    </Stack>
  </Paper>
);

export default CardShell;
