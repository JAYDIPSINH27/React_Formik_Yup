import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function Header() {
    const classes=useStyles();
    return (
        <AppBar position="fixed">
  <Toolbar varient="dense" >
    <Typography variant="h6" align="justify" color="inherit" className={classes.title}>
     Personal Information Form
    </Typography>
    
  </Toolbar>
</AppBar>
    )
}
