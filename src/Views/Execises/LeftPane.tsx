import {Paper} from '@mui/material';

type style = {
  paper: {padding: number; marginTop: number; marginBottom: number};
};

export default ({paper}: style) => <Paper style={paper}>Left Pane</Paper>;
