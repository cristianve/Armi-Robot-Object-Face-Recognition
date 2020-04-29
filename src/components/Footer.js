import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.uab.cat/">
            Universitat Autònoma de Barcelona - UAB Barcelona
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            ROBÒTICA, LLENGUATGE I PLANIFICACIÓ - UAB
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Curs 2019-2020
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}