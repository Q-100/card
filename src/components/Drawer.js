import { Stack, List, ListItem, ListItemButton, SwipeableDrawer, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import Logo from './Logo';

const Drawer = ({open, setOpen, routes}) => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Stack align="center" minWidth={300}>
        <Logo sx={{m: 'auto'}} />
        <List>
          {routes.filter((route) => !route.hidden).map((route) => (
            <ListItem key={`route-${route.name}`}>
              <ListItemButton onClick={() => setOpen(false)} component={RouterLink} to={route.link || route.path}>
                {route.name}
              </ListItemButton>
            </ListItem>
          ))}
          
          <ListItem key={`route-email`}>
            <ListItemButton component={Link} href="mailto:admin@nvrkr.com">
              문의하기
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </SwipeableDrawer>
  )
}

export default Drawer;