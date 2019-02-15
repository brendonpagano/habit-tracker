// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const AddHabitDialog = ({
  isOpen,
  onClose,
  onCancel,
  onSuccess,
  ...props,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby='add-habit-dialog'
    {...props}
  >
    <DialogTitle>Add a habit</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Add information regarding the habit to track below.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="habitTitle"
        label="Title"
        type="text"
        fullWidth />
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel || onClose} color='secondary'>
        Cancel
      </Button>
      <Button onClick={onSuccess || onClose} color='primary'>
        Add
      </Button>
    </DialogActions>
  </Dialog>
);


AddHabitDialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onSuccess: PropTypes.func,
};


export default AddHabitDialog;
