/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function MaterialModal({ open, onClose, messageMain, message }) {
  return (
    <Modal
      keepMounted
      open={open}
      onClose={onClose}
      aria-labelledby="feedback-modal-title"
      slotProps={{ backdrop: { sx: { bgcolor: 'rgba(0,0,0,.7)' } } }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 'calc(100% - 32px)', sm: 320 },
          maxWidth: 400,
          maxHeight: 'calc(100dvh - 32px)',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          border: { xs: '4px solid rgb(27, 27, 27)', sm: '6px solid rgb(27, 27, 27)' },
          borderRadius: '15px',
          boxShadow: 14,
          p: { xs: 2.5, sm: 4 },
        }}
      >
        <Typography id="feedback-modal-title" variant="h6" component="h2">
          {messageMain}
        </Typography>
        <Typography sx={{ mt: 2 }}>{message}</Typography>
        <Stack sx={{ mt: 3 }} alignItems="flex-end">
          <Button onClick={onClose} variant="contained" sx={{ minHeight: 44 }}>
            Fechar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
