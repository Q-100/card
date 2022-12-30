import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, useMediaQuery } from "@mui/material";

import Logo from "../components/Logo";
import Info1 from "../components/info/Info1";
import Info2 from "../components/info/Info2";
import Info3 from "../components/info/Info3";
import Info4 from "../components/info/Info4";
import Info5 from "../components/info/Info5";
import InfoPageMainBanner from "../components/info/InfoPageMainBanner";
import Problem from "../components/info/Problem";
import Solution from "../components/info/Solutuon";
import ConnectBanner1 from "../components/info/ConnectBanner1";
import PartnerList from "../components/info/PartnerList";
import InfoPageSolutionInfo from "../components/info/InfoPageSolutionInfo";
import InfoPageSolutionInfoMobileM from "../components/info/InfoPageSolutionInfo-Mobile";
const FirstPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <Box>
      <div>
        <InfoPageMainBanner />
        <Problem />
        <ConnectBanner1 />
        <Solution />
        {isMobile ? <InfoPageSolutionInfoMobileM /> : <InfoPageSolutionInfo />}
        <PartnerList />
      </div>
    </Box>
  );
};

export default FirstPage;
