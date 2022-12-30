import * as React from "react";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SmartCardHowtoUseLayout from "./SmartCardHowtoUseLayout";
import { Container } from "@mui/material";

import MuiAccordion from "@mui/material/Accordion";

const accordionBorder = {
  borderBottom: "2px solid #f1f1f1",
};
const fontstyled = {
  fontWeight: 700,
  fontSize: 17,
};
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function VideoBoxMobile() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container>
      <Typography
        marked="center"
        textAlign="center"
        variant="h4"
        sx={{ mb: 2, fontWeight: 700, fontFamily: "sans-serif", mb: 7 }}
      >
        작동 방법
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={accordionBorder}
        >
          <Typography sx={fontstyled}>기본사용법(아이폰)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SmartCardHowtoUseLayout
            videosrc="./img/기본사용법.mp4"
            contents="NVR의 스마트 명함을 스마트폰에 태그하게 되면 태그한 스마트폰에 명함
            정보를 볼 수 있는 웹페이지로 연결됩니다."
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={accordionBorder}
        >
          <Typography sx={fontstyled}>기본사용법(갤럭시)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SmartCardHowtoUseLayout
            videosrc="./img/갤럭시 사용법.mp4"
            contents="NVR의 스마트 명함을 스마트폰에 태그하게 되면 태그한 스마트폰에 명함
            정보를 볼 수 있는 웹페이지로 연결됩니다."
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={accordionBorder}
        >
          <Typography sx={fontstyled}>명함 태그 위치(아이폰)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SmartCardHowtoUseLayout
            videosrc="./img/아이폰NFC위치.mp4"
            contents="스마트폰의 NFC 모듈은 각 제조사별로 위치가 다릅니다. <br />
            Apple : 전화기 상단 카메라 옆"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={accordionBorder}
        >
          <Typography sx={fontstyled}>명함 태그 위치(갤럭시)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SmartCardHowtoUseLayout
            videosrc="./img/갤럭시NFC위치.mp4"
            contents="스마트폰의 NFC 모듈은 각 제조사별로 위치가 다릅니다. <br />
            Samsung : 전화기 중간 또는 하단 근처"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          sx={accordionBorder}
        >
          <Typography sx={fontstyled}>연락처 저장</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SmartCardHowtoUseLayout
            videosrc="./img/연락처 저장.mp4"
            contents="일일이 연락처를 저장할 필요 없이 연락처 저장 버튼 하나만으로 손쉽게
            상대방의 연락처를 저장할 수 있습니다."
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
