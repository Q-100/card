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

function Solution() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "white",
        flexDirection: "column",
        mt: 20,
      }}
    >
      <Container>
        <Typography
          marked="center"
          textAlign="center"
          variant="h5"
          sx={{ mb: 2, fontWeight: 600, fontFamily: "sans-serif" }}
        >
          SOLUTION
        </Typography>
        <Typography
          marked="center"
          textAlign="center"
          variant="h3"
          sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
        >
          NVR의 솔루션을 소개합니다.
        </Typography>
      </Container>
      {/* <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 2 }}>
                스마트 명함
              </Typography>
              <Box
                component="img"
                src="/img/image 50.png"
                alt="suitcase"
                sx={{ height: 80 }}
              />

              <Typography variant="p" sx={{ my: 3 }}>
                언제까지 미팅을 메일이나 전화로 잡으실 건가요? NFC카드 내에 있는
                미팅 서비스로 편리하게 상대방과의 약속을 잡아보세요.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 2 }}>
                스마트 스티커 라벨
              </Typography>
              <Box
                component="img"
                src="/img/image 46.png"
                alt="graph"
                sx={{ height: 80 }}
              />

              <Typography variant="p" sx={{ my: 3 }}>
                언제까지 미팅을 메일이나 전화로 잡으실 건가요? NFC카드 내에 있는
                미팅 서비스로 편리하게 상대방과의 약속을 잡아보세요.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 2 }}>
                인증
              </Typography>
              <Box
                component="img"
                src="/img/image 47.png"
                alt="clock"
                sx={{ height: 80 }}
              />

              <Typography variant="p" sx={{ my: 3 }}>
                언제까지 미팅을 메일이나 전화로 잡으실 건가요? NFC카드 내에 있는
                미팅 서비스로 편리하게 상대방과의 약속을 잡아보세요.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Typography variant="h6" sx={{ my: 2 }}>
                친환경(ESG) 제품
              </Typography>
              <Box
                component="img"
                src="/img/image 48.png"
                alt="clock"
                sx={{ height: 80 }}
              />

              <Typography variant="p" sx={{ my: 3 }}>
                언제까지 미팅을 메일이나 전화로 잡으실 건가요? NFC카드 내에 있는
                미팅 서비스로 편리하게 상대방과의 약속을 잡아보세요.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
  );
}

export default Solution;
