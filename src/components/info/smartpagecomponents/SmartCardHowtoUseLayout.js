import * as React from "react";

import { Box, Container, Typography, CardMedia } from "@mui/material";

const item = {
  "&:hover": {
    background: "#f1f1f1",
    cursor: "pointer",
  },
  "&:active": { background: "coral" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  background: "white",
};

export default function SmartCardHowtoUseLayout(props) {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "white",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={props.videosrc}
          autoPlay
          loop
          muted
          playsInline
          className="motionvideo"
        ></video>
      </Container>
      <Container>
        <Box>
          <Typography
            marked="center"
            textAlign="center"
            variant="h6"
            sx={{
              fontWeight: 500,
              fontFamily: "sans-serif",
              fontSize: 17,
              mt: 5,
            }}
          >
            {props.contents}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
