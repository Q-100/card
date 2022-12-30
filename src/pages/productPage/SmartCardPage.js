import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";

import SmartCardInfoBanner from "../../components/info/smartpagecomponents/SmartCardInfoBanner";
import SmartCardInfo1 from "../../components/info/smartpagecomponents/SmartCardInfo1";
import SimpleAccordion from "../../components/Accordion.js";
import SmartCardInfo2 from "../../components/info/smartpagecomponents/SmartCardInfo2";
import SmartCardInfo2M from "../../components/info/smartpagecomponents/SmartCardInfo2-Mobile";
import VideocBox from "../../components/info/smartpagecomponents/VideoBox";
import VideoBoxMobile from "../../components/info/smartpagecomponents/VideoBox-Mobile";

function SmartCardPage() {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box>
      <div>
        <SmartCardInfoBanner />
        <SmartCardInfo1 />
        {isMobile ? <SmartCardInfo2M /> : <SmartCardInfo2 />}
        {isMobile ? <VideoBoxMobile /> : <VideocBox />}
      </div>
      <Container sx={{ my: 3 }}>
        <div className="Nvr-footer-container">
          <h2>자주 묻는 질문</h2>
          <SimpleAccordion />
        </div>
      </Container>
    </Box>
  );
}

export default SmartCardPage;
