import {Paper} from '@mui/material';

type style = {
  paper: {padding: number; marginTop: number; marginBottom: number};
};

export default (style: style) => <Paper style={style.paper}>Right Pane</Paper>;
