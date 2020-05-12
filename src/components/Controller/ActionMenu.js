import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className={classes.root}>

      <BuildIcon/>
      <Typography gutterBottom variant="h5" component="h2">
        <Box fontWeight="fontWeightBold">Action Menu:</Box>
      </Typography>

      <Button variant="contained" color="primary">
        Cargar
      </Button>
      <Button variant="contained" color="primary">
        Descargar
      </Button>


     {/* Discancia Ultrasonidos*/}
  
          <Typography variant="body2" color="textSecondary" component="p">
            <Box fontWeight="fontWeightBold">Distancia colision de objetos:</Box>
          </Typography>
       
          <TextField id="outlined-basic" label="Distance" variant="outlined" defaultValue="2.5 cm" />


  
    </div>
  );
}
