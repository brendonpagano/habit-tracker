// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Utils
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


const HabitContainer = ({ classes, children }) => (
  <Paper className={classes.root} elevation={1}>
    {children}
  </Paper>
);


HabitContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(HabitContainer);
