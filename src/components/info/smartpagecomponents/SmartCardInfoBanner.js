import * as React from "react";
import MainPageLayout from "../MainPageLayout";
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

const backgroundImage = "./img/smartCardMainBanner_compress.png";

export default function SmartCardInfoBanner() {
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
        opacity: 0.1,
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
        sx={{
          fontWeight: 800,
          fontFamily: "sans-serif",
          color: "black",
          fontSize: 70,
          letterSpacing: -1,
        }}
      >
        스마트 명함
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{
          mb: 4,
          mt: { sx: 4, sm: 5 },
          fontWeight: 400,
          fontFamily: "sans-serif",
          color: "black",
          fontSize: 22,
        }}
      >
        평범한 명함을 뛰어넘어 다양한 기능을
        <br />
        사용할 수 있는 스마트 명함을 지금 바로 사용하세요.
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
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "sans-serif",
          borderRadius: 0,
          backgroundColor: "black",
          color: "white",
        }}
      >
        명함 등록하기
      </Button>
    </MainPageLayout>
  );
}
