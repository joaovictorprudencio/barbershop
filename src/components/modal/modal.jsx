import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '6px solid  rgb(27, 27, 27))',  
  borderRadius: '15px',
  boxShadow: 14,
  p: 4,
};

export default function MaterialModal({open, onClose, messageMain, message}) {
  const handleOpen = () => setOpen(true);

 
  


  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
           {messageMain}
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
           {message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}