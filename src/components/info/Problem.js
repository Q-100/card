import * as React from "react";
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
  Grid,
} from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  background: "white",
};
const itemContents = [
  {
    title: "한정적인 정보 전달",
    content:
      "종이의 크기는 한정적이며 그 안에 많은 정보를 넣을 수 없어 많은 양의 종이를 사용하게 됩니다.",
    src: "./img/problemImgblack1.png",
  },
  {
    title: "일방적인 정보 전달",
    content: "사용자는 정보를 일방적으로 받기만 합니다.",
    src: "./img/problemImgblack2.png",
  },
  {
    title: "정보 습득 주체자의 한계",
    content: "시각 장애인 등 정보를 얻는 방식에 한계점이 존재합니다.",
    src: "./img/problemImgblack3.png",
  },
  {
    title: "분실",
    content: "소유하고 있는 종이 정보는 언젠가 분실되거나 소실될 수 있습니다.",
    src: "./img/problemImgblack4.png",
  },
];

export default function Problem() {
  return (
    <Box>
      <Container>
        <Typography
          marked="center"
          textAlign="center"
          variant="h4"
          sx={{ mb: 2, fontWeight: 700, fontFamily: "sans-serif" }}
        >
          종이는 많은 문제점을 가지고 있습니다.
        </Typography>
        <Typography
          marked="center"
          textAlign="center"
          variant="h6"
          sx={{
            mb: 20,
            fontWeight: 300,
            fontFamily: "sans-serif",
            fontSize: 16,
          }}
        >
          종이를 사용하는 분야는 매우 다양합니다. 하지만 종이를 사용하는
          대부분은 정보 제공의 목적을 가진 정보 용지입니다. 많은 기업들은
          ESG경영을 위해 종이를 대체하고 있지만 고객들에게 정보를 전달 하기 위해
          많은 양의 종이를 사용하고 있으며 종이를 사용하는데 익숙해져 있어
          종이를 대체 하는데 많은 고민을 가지고 있습니다. 그래서 저희 NVR은
          종이, 그 중 정보의 전달을 목적으로 한 정보 용지를 줄이는 것을 목표로
          하고 있습니다.
        </Typography>
      </Container>
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={3}>
          {itemContents.map((i) => (
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box component="img" src={i.src} sx={{ height: 60 }} />
                <Typography
                  variant="h6"
                  sx={{
                    my: 1,
                    fontSize: 20,
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {i.title}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    my: 2,
                    fontSize: 16,
                    fontFamily: "sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {i.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
