import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useDeleteOrder} from "../api/useDeleteOrder.js";
import CircularProgress from "@mui/material/CircularProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line react/prop-types
export const DeleteOrderDialog = ({open = false, onClose, orderId}) => {
    const { mutateAsync: deleteOrder, isPending } = useDeleteOrder()

    const handleDeleteOrder = async () => {
        try {
            await deleteOrder(orderId);
            onClose()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Deletar Horário"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Deseja deletar este horário de sua agenda ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button color={'error'} disabled={isPending} onClick={handleDeleteOrder}>
                    { isPending ? <CircularProgress size={25}/> : 'Deletar'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
