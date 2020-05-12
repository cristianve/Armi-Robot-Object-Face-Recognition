import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import GamesIcon from '@material-ui/icons/Games';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
        
        <GamesIcon/>
        <Typography gutterBottom variant="h5" component="h2" >
        <Box fontWeight="fontWeightBold" component="span">Directional Buttons:</Box>
      </Typography>
    
      <Button variant="contained" color="primary"><ArrowUpwardIcon/></Button>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button ><ArrowBackIcon/></Button>
        <Button><ArrowForwardIcon/></Button>
      </ButtonGroup>
      <Button  variant="contained" color="primary"><ArrowDownwardIcon/></Button>
    </div>
  );
}