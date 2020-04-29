import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import ArrowButtons from "./ArrowButtons";
import ActionMenu from "./ActionMenu";
import InfoMenu from "./InfoMenu";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Controller */}
      <Grid container>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ArrowButtons />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <ActionMenu />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <InfoMenu />
          </Paper>
        </Grid>
      </Grid>

      {/* End footer */}
    </React.Fragment>
  );
}
