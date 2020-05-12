import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Switcher from "./Switcher";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';

import InsertChartIcon from '@material-ui/icons/InsertChart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });




  return (
    <div className={classes.root}>


     <InsertChartIcon/>
      <Typography gutterBottom variant="h5" component="h2" >
        <Box fontWeight="fontWeightBold" component="span">Real-Time Info/Data:</Box>
      </Typography>

      {/* Posicion X,Y*/}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight="fontWeightBold">Posicion X,Y:</Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            -55 / 22
          </Typography>
        </Grid>
      </Grid>

      {/* Discancia Ultrasonidos*/}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight="fontWeightBold">Distancia objeto mas cercano:</Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            13 cm
          </Typography>
        </Grid>
      </Grid>

      {/* Estado Brazo*/}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight="fontWeightBold">Estado del brazo:</Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Switcher left="Cargando" right="Reposo" />
        </Grid>
      </Grid>

      {/* Discancia colision objetos*/}
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight="fontWeightBold">Objeto Detectado:</Box>
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
        </Grid>
      </Grid>
    </div>
  );
}
