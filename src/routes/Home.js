// Node Modules
import React, { Fragment } from 'react';

// Components
import { Grid } from '@material-ui/core';
import HabitContainer from '../components/HabitContainer';
import AddHabitButton from '../components/AddHabitButton';


const Home = () => (
  <Fragment>
    <AddHabitButton />
    <Grid container spacing={24}>
      <Grid item xs><HabitContainer /></Grid>
      <Grid item xs><HabitContainer /></Grid>
      <Grid item xs><HabitContainer /></Grid>
      <Grid item xs><HabitContainer /></Grid>
    </Grid>
  </Fragment>
);


export default Home;
