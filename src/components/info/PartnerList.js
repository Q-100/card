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
import { ImagesearchRoller } from "@mui/icons-material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
const logoimages = [
  {
    url: "https://www.welcomebank.co.kr/web/ibn/img/common/open_graph_logo.png",
    component: "img",
    title: "웰컴",
  },
  {
    url: "https://dimg.donga.com/wps/NEWS/IMAGE/2021/06/17/107483600.1.jpg",
    component: "img",
    title: "와인나라",
  },
  {
    url: "https://cf.shop.s.zigzag.kr/images/cq-9gx57snq.jpg?27579267",
    component: "img",
    title: "pxg",
  },
  {
    url: "https://www.cellreturn.com/KR/assets/images/visual/concept_logo1.png",
    component: "img",
    title: "셀리턴",
  },
];

function PartnerList() {
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
      <Container>
        <Typography
          marked="center"
          textAlign="center"
          variant="h5"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          PARTNER
        </Typography>
        <Typography
          marked="center"
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: 700 }}
        >
          유명 기업들은 ESG 경영을 위해 <br /> NVR의 다양한 제품을 사용하고
          있습니다.
        </Typography>
      </Container>
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          {logoimages.map((i) => (
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={i.url}
                  alt={i.title}
                  sx={{ height: 100 }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PartnerList;
