// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// Utils
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});


const AddHabitButton = ({ classes, onClick }) => (
  <Fab
    color='primary'
    className={classes.fab}
  >
    <AddIcon />
  </Fab>
);


AddHabitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AddHabitButton);
