import {Box, Grid, Paper} from '@mui/material';
import {Fragment} from 'react';

type paneLeftRight = {
  leftRight: {
    style: {padding: number; marginTop: number; marginBottom: number};
    panes: {
      pane: string;
    }[];
  };
};

export default function Pane({leftRight}: paneLeftRight) {
  return (
    <Fragment>
      {leftRight.panes.map((pane) => (
        <Grid item sm>
          <Paper style={leftRight.style}>{pane.pane} </Paper>
        </Grid>
      ))}
    </Fragment>
  );
}
