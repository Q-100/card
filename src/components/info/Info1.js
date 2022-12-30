import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from '@mui/material';

export default function Info1() {
  return (
    <Box className="Info Info-reverse img-none" py={4}>
      <div className="Img-box">
        <img src="/img/info1.png" alt="" />
      </div>
      <Box className="Info-contents">
        <h1>주머니 속 명함 한 장으로 환경을 지키세요.</h1>
        <p>
          대부분의 명함은 코팅이 되어있어 종이로 재활용이 불가능합니다.
          <br />
          재활용 재료로 만들어진 명함 단 한장으로 환경을 보호하세요. <br />
          특별히 여러분에게 무료로 친환경 NVR 명함을 보내드립니다.
        </p>
        {/* <Button
          variant="contained"
          component={RouterLink}
          to="/auth"
          sx={{ borderRadius: 10, px: 2, py: 1 }}
        >
          명함 등록하기
        </Button> */}
      </Box>
    </Box>
  );
}
