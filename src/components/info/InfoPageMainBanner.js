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
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

export default function InfoPageMainBanner() {
  return (
    <MainPageLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
      layoutsize={{ mb: 20, height: "90vh" }}
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
        variant="h2"
        marked="center"
        sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
      >
        Pursuing a paperless world.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{
          mb: 4,
          mt: { sx: 4, sm: 5 },
          fontWeight: 350,
          fontFamily: "sans-serif",
        }}
      >
        지금 바로 ESG와 디지털 경영에 도움을 주는 NVR과 함께하세요.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        component="a"
        href=""
        sx={{
          minWidth: 200,
          width: 300,
          height: 60,
          fontSize: 20,
          fontWeight: 500,
          fontFamily: "sans-serif",
          borderRadius: 0,
          backgroundColor: "white",
          color: "black",
        }}
      >
        솔루션 바로가기
      </Button>
    </MainPageLayout>
  );
}
