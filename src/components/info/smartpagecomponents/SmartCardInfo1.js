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
  Grid,
  useMediaQuery,
} from "@mui/material";
import SmartCardInfo2 from "./SmartCardInfo2";
import VideocBox from "./VideoBox";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SmartCardInfo2M from "./SmartCardInfo2-Mobile";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
  background: "white",
};
const itemContents = [
  {
    title: "단 한장만으로.",
    content:
      "상대방에게 명함을 줄 필요 없이 스마트폰에 명함을 태그하여 자신을 소개할 수 있습니다.",
  },
  {
    title: "다양한 정보",
    content:
      "일반 명함 안에는 넣을 수 있는 정보가 한정적입니다. 스마트 명함에는 프로필사진, 개인SNS, 인트로영상 등을 넣을 수 있어 상대방에게 특별하게 소개할 수 있습니다.",
  },
  {
    title: "앱 없이 간편하게.",
    content:
      "당신의 꽉찬 앱 목록에 저희도 동참할수는 없죠. 스마트 명함은 다른 명함 플랫폼과는 다르게 앱이 필요없습니다. 인터넷만 연결되어있으면 언제 어디서든지 명함 프로필을 확인할 수 있습니다. ",
  },
  {
    title: "일정 요청 서비스",
    content:
      "언제까지 미팅을 메일이나 전화로 잡으실 건가요? 스마트 명함 내에 있는 미팅 서비스로 편리하게 상대방과 약속을 잡아보세요.",
  },
  {
    title: "커스터마이징",
    content:
      "이력서, 포트폴리오 등 자신이 원하는 정보를 명함 페이지 안에 넣어 상대방에게 자신을 특별하게 소개하세요.",
  },
  {
    title: "편리한 연락처 저장",
    content:
      "언제까지 하나하나 상대방 연락처를 저장하고 있을건가요? 연락처저장 버튼 하나만으로도 상대방 연락처를 손쉽게 저장 할 수 있습니다.",
  },
];
export default function SmartCardInfo1() {
  return (
    <Box sx={{}}>
      <Container>
        <Typography
          marked="center"
          textAlign="center"
          variant="h2"
          sx={{ mb: 2, fontWeight: 700, fontFamily: "sans-serif" }}
        >
          왜 스마트 명함인가?
        </Typography>
        <Typography
          marked="center"
          textAlign="center"
          variant="h6"
          sx={{
            mb: 5,
            fontWeight: 400,
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "##2f3132",
          }}
        >
          스마트 명함은 스마트폰에 명함을 접촉하여 상대방에게 다양한 정보와
          기능을 활용할 수 있게 해주는 제품입니다.
          <br />
          <br />
          명함은 많은 사람들이 사용하고 있으며 그만큼 많이 소비됩니다. 하지만
          대부분의 명함은 코팅이 되어있어 종이로 재활용이 불가능합니다.
          <br />
          <br />
          이러한 문제점을 IT와 명함을 결합시켜 명함의 소비되는 양을 줄이며
          기본적인 명함의 기능 뿐만아니라 프로필사진, 개인 SNS, 커스텀 인트로
          영상, 미팅일정 신청 기능 등 다양한 기능을 제공합니다.
        </Typography>
      </Container>
      <Container sx={{ mt: 15, mb: 10, display: "flex", position: "relative" }}>
        <Grid container spacing={3}>
          {itemContents.map((i) => (
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Typography
                  variant="h4"
                  sx={{
                    my: 1,
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
      <Box sx={{ mb: 10 }}>
        <Typography
          marked="center"
          textAlign="center"
          variant="h6"
          sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
        >
          <Link href="#" underline="hover">
            기능 알아보기
            <KeyboardArrowDownIcon textAlign="center" />
          </Link>
        </Typography>
        <Typography
          marked="center"
          textAlign="center"
          variant="h6"
          sx={{ fontWeight: 700, fontFamily: "sans-serif" }}
        >
          <Link href="#videoBox" underline="hover">
            작동 방법
            <KeyboardArrowDownIcon textAlign="center" />
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
