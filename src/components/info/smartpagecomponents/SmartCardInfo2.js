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
  makeStyles,
  useMediaQuery,
  Hidden,
  CardMedia,
} from "@mui/material";
import InfoPageSolutionInfoMobile from "./SmartCardInfo2-Mobile";

const item = {
  display: "flex",
  px: 5,
  background: "white",
};
const gridleft = {
  maxWidth: 700,
  width: "60%",
};
const gridtitle = {
  fontSize: 30,
  fontWeight: 700,
  mb: 1,
};
const gridcontent = {
  fontSize: 16,
  fontWeight: 400,
};
const gridsubtitle = {
  fontWeight: 600,
  color: "#237BFF",
};
export default function SmartCardInfo2() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "white",
        flexDirection: "column",
        mt: 40,
      }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex" }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6} order={2}>
            <Box
              sx={{
                item,
              }}
            >
              <Box
                component="img"
                src="./img/IphoneImg.png"
                sx={gridleft}
                maxWidth="400px"
                height="200"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={1}>
            <Box>
              <Stack>
                <Typography sx={gridsubtitle}>명함의 진화</Typography>
                <Typography variant="h6" sx={gridtitle}>
                  스마트 명함
                </Typography>

                <Typography variant="p" sx={gridcontent}>
                  아직도 다른 사람들과 같은 방식으로 명함을 주고 받고 있나요?
                  스마트 명함으로 자신을 특별하게 소개하세요.
                </Typography>
                <Link
                  href="/product/card"
                  underline="hover"
                  mt={2}
                  color="#2F37FF"
                  fontWeight={600}
                >
                  스마트명함 자세히 알아보기
                  <img
                    src="./img/Arrow 3.png"
                    alt=""
                    className="Arrow-rotate"
                  />
                </Link>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={4}>
            <Stack>
              <Typography sx={gridsubtitle}>특별한 상품 소개</Typography>
              <Typography variant="h6" sx={gridtitle}>
                스마트 라벨
              </Typography>

              <Typography variant="p" sx={gridcontent}>
                평범한 제품 소개로는 고객들은 만족시키기 어렵습니다. 고객들에게
                특별한 방법으로 더 많은 제품의 정보를 전달하고 소통하세요.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} order={3}>
            <Box
              sx={{
                item,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="./img/sns_Iphone.png"
                sx={{ maxWidth: 400, width: "35%" }}
                maxWidth="200px"
                height="auto"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={6}>
            <Container sx={{ display: "flex" }}>
              <video
                src="./img/인트로.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: 300, width: "70%" }}
              ></video>
            </Container>
          </Grid>
          <Grid item xs={12} md={6} order={5}>
            <Stack>
              <Typography sx={gridsubtitle}>혁신적인 정품인증</Typography>
              <Typography variant="h6" sx={gridtitle}>
                인증
              </Typography>

              <Typography variant="p" sx={gridcontent}>
                현재 제품의 모조품 유통 및 판매가 문제되고 있진 않나요? NVR만의
                특별한 제품 인증 기능을 사용하세요.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} order={8}>
            <Stack>
              <Typography sx={gridsubtitle}>재활용</Typography>
              <Typography variant="h6" sx={gridtitle}>
                친환경(ESG) 업사이클 제품
              </Typography>
              플라스틱은 환경에 많은 문제를 일으키고 있습니다. 업사이클링
              플라스틱 제품을 사용하여 기업의 ESG 경영과 더불어 환경을
              지켜주세요.
              <Typography variant="p" sx={gridcontent}></Typography>
              <Link
                href="#"
                underline="hover"
                mt={2}
                color="#2F37FF"
                fontWeight={600}
              >
                친환경 업사이클 제품 확인하기
                <img src="./img/Arrow 3.png" alt="" className="Arrow-rotate" />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} order={7}>
            <Box sx={{ item, overflow: "hidden" }}>
              <Box
                component="img"
                src="./img/schedule_img.png"
                sx={{ maxWidth: 700, width: "80%" }}
                maxWidth="100%"
                height="auto"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
