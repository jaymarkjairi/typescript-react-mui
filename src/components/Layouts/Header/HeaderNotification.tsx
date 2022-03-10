import {Badge, IconButton} from '@mui/material';
import {NotificationsIcon} from '../../icons';

const HeaderNotification = () => {
  return (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};
export default HeaderNotification;
