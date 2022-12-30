import { useEffect, useState } from 'react';
import { 
  Box, Stack, Container, Divider, Typography, Grid, IconButton
} from "@mui/material";
import { DeleteOutlined as DeleteOutlinedIcon } from '@mui/icons-material';

import { cancelPurchase } from '../../firebase/database';

import moment from 'moment';

const STATUS = {
  REQUEST: "승인 대기 중",
  DELIVERY: "배송 중",
  ACTIVATED: "배송 완료",
  DENIED: "신청 실패"
}

const InfoItem = ({label, value}) => {
  return (
    <Stack m={1}>
      <Typography align="left" variant="caption" color="textSecondary">{label}</Typography>
      <Typography align="left">{value}</Typography>
    </Stack>
  )
}


const PurchaseList = ({purchases, authId}) => {
  if (Object.keys(purchases).length == 0) {
    return <Typography variant="h5" sx={{my: 3}} color="textSecondary">아직 신청된 명함이 없습니다.</Typography>
  }
  return (
    <Stack>
      {Object.keys(purchases).map((key) => {
        const handleRemove = () => {
          if (window.confirm("해당 요청을 삭제하시겠습니까?")) {
            cancelPurchase(authId, key);
            alert("삭제되었습니다.");
          }
        }
        const purchase = purchases[key];
        return (
          <Stack
            key={`purchase-item-${key}`}
            sx={{border: '1px solid #d9d9d9'}}
            p={1}
            my={1}
          >
            <Grid container>
              <Grid item md={4} xs={5}>
                <InfoItem label="신청 일자" value={moment(purchase.createdAt).format("YYYY-MM-DD HH:mm:ss")} />
              </Grid>
              <Grid item md={2} xs={6}>
                <InfoItem label="상태" value={STATUS[purchase.status]} />
              </Grid>
              <Grid item md={1} xs={5}>
                <InfoItem label="개수" value={purchase.count} />
              </Grid>
              <Grid item md={4} xs={6}>
                <InfoItem label="주소" value={`${purchase.address1} ${purchase.address2}`} />
              </Grid>
              <Grid item md={1} xs={1}>
                <IconButton onClick={handleRemove}>
                  <DeleteOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Stack>
        )
      })}
    </Stack>
  )
}

export default PurchaseList;