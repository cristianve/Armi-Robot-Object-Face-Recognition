import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
    <h4>Directional Buttons:</h4>
      <Button variant="contained" color="primary">UP</Button>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>LEFT</Button>
        <Button>RIGHT</Button>
      </ButtonGroup>
      <Button  variant="contained" color="primary">Down</Button>
    </div>
  );
}