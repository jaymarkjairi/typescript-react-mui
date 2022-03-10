import {Grid} from '@mui/material';
import {Box} from '@mui/system';
import LeftPane from './LeftPane';
import Pane from './Pane';
import RightPane from './RightPane';

const paneLeftRight = {
  leftRight: {
    style: {padding: 20, marginTop: 20, marginBottom: 10},
    panes: [{pane: 'Left Pane'}, {pane: 'Right Pane'}],
  },
};
{
}
export default () => (
  <Grid sx={{flexGrow: 1}} container spacing={0} justifyContent="center">
    <Pane leftRight={paneLeftRight.leftRight} />
  </Grid>

  //   <Grid sx={{flexGrow: 1}} container spacing={2}>
  //     <Grid item xs>
  //       <Grid container justifyContent="center">
  //         <Grid item>
  //           <LeftPane paper={paneLeftRight.leftRight.style} />
  //           <RightPane paper={paneLeftRight.leftRight.style} />
  //         </Grid>
  //         <Grid item>
  //           <LeftPane paper={paneLeftRight.leftRight.style} />
  //           <RightPane paper={paneLeftRight.leftRight.style} />
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
);
