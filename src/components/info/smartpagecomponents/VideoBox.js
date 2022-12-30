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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";

import SmartCardHowtoUseLayout from "./SmartCardHowtoUseLayout";
const tabsitem = {
  fontWeight: 600,
  fontFamily: "sans-serif",
  fontSize: 20,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function VideocBox() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }} id="videoBox">
        <Typography
          marked="center"
          textAlign="center"
          variant="h3"
          sx={{ mb: 2, fontWeight: 700, fontFamily: "sans-serif", mb: 7 }}
        >
          작동 방법
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="아이폰 사용법" {...a11yProps(0)} sx={tabsitem} />
            <Tab label="갤럭시 사용법" {...a11yProps(1)} sx={tabsitem} />
            <Tab
              label="명함 태그 위치(갤럭시)"
              {...a11yProps(2)}
              sx={tabsitem}
            />
            <Tab
              label="명함 태그 위치(아이폰)"
              {...a11yProps(3)}
              sx={tabsitem}
            />
            <Tab label="연락처 저장" {...a11yProps(4)} sx={tabsitem} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SmartCardHowtoUseLayout
            videosrc="./img/기본사용법.mp4"
            contents="NVR의 스마트 명함을 스마트폰에 태그하게 되면 태그한 스마트폰에 명함
            정보를 볼 수 있는 웹페이지로 연결됩니다."
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SmartCardHowtoUseLayout
            videosrc="./img/갤럭시 사용법.mp4"
            contents="NVR의 스마트 명함을 스마트폰에 태그하게 되면 태그한 스마트폰에 명함
            정보를 볼 수 있는 웹페이지로 연결됩니다."
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SmartCardHowtoUseLayout
            videosrc="./img/갤럭시NFC위치.mp4"
            contents="스마트폰의 NFC 모듈은 각 제조사별로 위치가 다릅니다. <br />
            Samsung : 전화기 중간 또는 하단 근처"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SmartCardHowtoUseLayout
            videosrc="./img/아이폰NFC위치.mp4"
            contents="스마트폰의 NFC 모듈은 각 제조사별로 위치가 다릅니다. <br />
            Apple : 전화기 상단 카메라 옆"
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SmartCardHowtoUseLayout
            videosrc="./img/연락처 저장.mp4"
            contents="일일이 연락처를 저장할 필요 없이 연락처 저장 버튼 하나만으로 손쉽게
            상대방의 연락처를 저장할 수 있습니다."
          />
        </TabPanel>
      </Box>
    </Container>
  );
}
