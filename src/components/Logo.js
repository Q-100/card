import { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink, useSearchParams } from "react-router-dom";

const customDataList = {
  welcomebank: {
    url: "https://www.welcomebank.co.kr",
    // image: "https://www.welcomebank.co.kr/web/ibn/img/main/intro_logo00.png" // 요청에 의해 제거
  },
  truben: {
    url: "https://www.trubeninvestment.com/",
    image: "https://q-100.github.io/NVR/img/image%2012.png",
  },
  pxg: {
    url: "https://pxg.co.kr",
    image:
      "https://firebasestorage.googleapis.com/v0/b/nvr-production.appspot.com/o/companies%2Fpxg%2Fimage%2Fpxg_logo.png?alt=media&token=8db87c9a-9e90-478c-af21-f41c1ebddcdc",
  },
  cjfood: {
    url: "https://cjfoods.com/",
    image: "/img/cjfoodvilleremovebackground.png",
  },
};

const Logo = ({ sx, size = 1, useDefault = false, color = "primary.main" }) => {
  return (
    <Box sx={{ ...sx, pt: 1 }}>
      <img height="50px" src="/img/NVR_logo.png" alt="" />
    </Box>
  );
};

export default Logo;
