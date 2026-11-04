import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useDeleteOrder } from "../api/useDeleteOrder.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
export const DeleteOrderDialog = ({ open = false, onClose, orderId }) => {
  const { mutateAsync: deleteOrder, isPending, isError, error, reset } =
    useDeleteOrder();

  const handleDeleteOrder = async () => {
    try {
      await deleteOrder(orderId);
      onClose();
    } catch (deleteError) {
      console.error(deleteError);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={isPending ? undefined : handleClose}
      aria-labelledby="delete-order-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="delete-order-title">Deletar horário</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Deseja deletar este horário de sua agenda? O horário volta a ficar
          disponível para novos agendamentos.
        </DialogContentText>

        {isError && (
          <Alert severity="error" variant="outlined" sx={{ mt: 2 }}>
            {error?.message || "Não foi possível desmarcar este horário."}
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={handleClose} disabled={isPending}>
          Cancelar
        </Button>
        <Button
          color="error"
          variant="contained"
          disabled={isPending}
          onClick={handleDeleteOrder}
          sx={{ minHeight: 40 }}
        >
          {isPending ? <CircularProgress size={22} color="inherit" /> : "Deletar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
