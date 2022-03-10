import {Box, Tab, Tabs} from '@mui/material';
import * as React from 'react';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const labels = [
    {
      id: 1,
      label: 'Item One',
    },
    {
      id: 2,
      label: 'Item Two',
    },
    {
      id: 3,
      label: 'Item Three',
    },
  ];

  return (
    <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
        {labels.map((label) => (
          <Tab key={label.id} label={label.label} />
        ))}
      </Tabs>
    </Box>
  );
}
