import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Container, Grid, Typography, Stack } from "@mui/material";

import Logo from "../../components/Logo";
import Info1 from "../../components/info/Info1";
import Info2 from "../../components/info/Info2";
import Info3 from "../../components/info/Info3";
import Info4 from "../../components/info/Info4";
import Info5 from "../../components/info/Info5";
import SimpleAccordion from "../../components/Accordion";
import ProductHero from "../../components/info/InfoPageMainBanner";
import ProductValues2 from "../../components/info/Problem";
import ProductValues from "../../components/info/Solutuon";
import ProductValues1 from "../../components/info/ProductValues copy";
import ProductHero1 from "../../components/info/ConnectBanner1";
import PartnerList from "../../components/info/PartnerList";
const FirstPage = () => {
  return (
    <Box>
      <div>
        <ProductHero />
        <ProductValues2 />
        <ProductHero1 />
        <ProductValues />
        <ProductValues1 />
        <PartnerList />
        <Info2 />
        <Info3 />
        <Info4 />
      </div>

      <Container sx={{ my: 3 }}>
        <div className="Nvr-footer-container">
          <h2>자주 묻는 질문</h2>
          <SimpleAccordion />
        </div>
      </Container>
    </Box>
  );
};

export default FirstPage;
