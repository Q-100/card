import { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';

export default function Modal({title, content, open, handleClose, onConfirm, onCancel}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle sx={{bgcolor: 'primary.main', color: "common.white"}}>
        {title}
      </DialogTitle>
      <DialogContent sx={{my: 2}}>
        {content}
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} variant="contained" autoFocus>확인</Button>
        {Boolean(onCancel) && <Button onClick={onCancel}>취소</Button>}
      </DialogActions>
    </Dialog>
  );
}