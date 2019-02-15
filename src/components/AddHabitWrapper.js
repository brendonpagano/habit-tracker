// Node Modules
import React, { Component } from 'react';

// Components
import AddHabitButton from './AddHabitButton';
import AddHabitDialog from './AddHabitDialog';


class AddHabitWrapper extends Component {

  state = {
    isDialogOpen: false,
  };


  makeToggleDialogCondition = (condition) => () => {
    this.setState({ isDialogOpen: condition });
  };

  openDialog = this.makeToggleDialogCondition(true);
  closeDialog = this.makeToggleDialogCondition(false);


  render() {
    const { isDialogOpen } = this.state;

    return (
      <>
        <AddHabitButton
          onClick={this.openDialog} />
        <AddHabitDialog
          isOpen={isDialogOpen}
          onClose={this.closeDialog} />
      </>
    );
  }

}


export default AddHabitWrapper;
