import * as React from "react";
import MainPageLayout from "./MainPageLayout";
import {
  Avatar,
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  Button,
  Link,
  IconButton,
} from "@mui/material";

const backgroundImage =
  "https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/ergo/overview/ergoseries-overview-lifestyle.png?v=1";

export default function ProductHero1() {
  return (
    <MainPageLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#f1f1f1",
        backgroundPosition: "center",
      }}
      layoutsize={{ mb: 20, height: "50vh" }}
      propOpacity={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "common.black",
        zIndex: -1,
        opacity: 0.4,
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="inherit"
        align="center"
        variant="h3"
        marked="center"
        sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
      >
        그래서 NVR은 종이 없는 세상을 만들고 있습니다.
      </Typography>

      {/* <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography> */}
    </MainPageLayout>
  );
}
