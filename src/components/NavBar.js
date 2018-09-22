import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const NavBar = (props) => {

  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography color="inherit" variant="title" style={{flex: 1}}>
            Comparaframe
          </Typography>
          <Tooltip title="Github Source">
          <Button 
            color="inherit"
            href="https://github.com/ejnarvala/Comparaframe"
            >Source</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;