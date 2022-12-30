import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, IconButton } from "@mui/material";

const FullVideo = ({ src, button }) => {
  return (
    <Box>
      <video
        src={src}
        autoPlay
        muted
        loop
        // controls
        style={{
          width: "100%",
          height: "80vh",
          objectFit: 'fill',
          display: "flex"
        }}
      />
      {Boolean(button) && <Box
        position="absolute"
        width="100%"
        top="70%"
        alignItems="center"
      >
        <Button
          variant="contained"
          component={button.to && RouterLink}
          to={button.to}
          sx={{
            px: 5,
            py: 2
          }}
        >
          {button.label}
        </Button>
      </Box>}
    </Box>
  )
}

export default FullVideo;