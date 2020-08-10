import React from 'react';
import './Logout.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function OutlinedButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Button onClick={() => { alert('Successfully Logged Out') }} variant="outlined">Logout</Button>
      </div>
    );
  }