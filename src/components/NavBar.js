import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

const App = (props) => {
  const { classes } = props;

  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography color="inherit" variant="title">
            Comparaframe
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(App);