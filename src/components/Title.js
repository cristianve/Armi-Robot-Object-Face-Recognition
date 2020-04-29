import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({

  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  
}));



export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            ARMi-ROBOT
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          En esta web-app podras controlar el ARMi Robot de manera manual y cargar/descargar objeto detectados de forma automatizada.
        </Typography>
      </Container>
      {/* End hero unit */}
     
    </React.Fragment>
  );
}