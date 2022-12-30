import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Logo from "./Logo";

const Header = ({ openDrawer }) => {
  return (
    <AppBar
      color="default"
      position="static"
    >
      <Toolbar sx={{alignItems: "center"}}>
        {/* <IconButton sx={{position: 'absolute', left: 16}} onClick={openDrawer}>
          <MenuIcon />
        </IconButton> */}
        <Logo sx={{mx: 'auto'}} />
      </Toolbar>
    </AppBar>
  )
}

export default Header;