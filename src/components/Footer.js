import { AppBar, Avatar, Box, ButtonBase, Grid, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon
} from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import Logo from "./Logo";

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box borderTop={1} borderColor="#000" pt={6} pb={12} textAlign="center">
      {/* <Logo useDefault /> */}
      <Grid container spacing={4} alignItems="flex-end">
        {!matches && <Grid item xs={12}>
          <Logo useDefault />
        </Grid>}
        <Grid item xs={12} md={5}>
          <Stack
            flexDirection="row"
            justifyContent="space-around"
          >
            {/* <ButtonBase>Mobile app</ButtonBase>
            <ButtonBase>Community</ButtonBase> */}
            {/* <ButtonBase>Company</ButtonBase> */}
          </Stack>
        </Grid>
        {matches && <Grid item xs={12} md={2}>
          <Logo useDefault />
        </Grid>}
        <Grid item xs={12} md={5}>
          <Stack
            flexDirection="row"
            justifyContent="space-around"
          >
          <ButtonBase component="a" href="mailto:admin@nvrkr.com">Contact</ButtonBase>
          {/* <ButtonBase>Blog</ButtonBase>
          <ButtonBase>Resources</ButtonBase> */}
          </Stack>
        </Grid>
      </Grid>
      {/* <Stack
        flexDirection="row"
        justifyContent="center"
        mt={12}
      >
        <Avatar sx={{bgcolor: "#DB4437", mx: 1}}>
          <GoogleIcon />
        </Avatar>
        <Avatar sx={{bgcolor: "#4267B2", mx: 1}}>
          <FacebookIcon />
        </Avatar>
        <Avatar sx={{bgcolor: "#fb3958", mx: 1}}>
          <InstagramIcon />
        </Avatar>
        <Avatar sx={{bgcolor: "#00ACEE", mx: 1}}>
          <TwitterIcon />
        </Avatar>
      </Stack> */}
    </Box>
  )
}

export default Footer;