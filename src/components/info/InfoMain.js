import React, { useState } from "react";

export default function InfoMain(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className="Info Main Info-reverse">
      <div className="Info-contents ">
        <p className="Font-up">주머니 속 명함 한 장으로 세상을 구하세요. </p>
        <p>
          아직도 실물 명함을 주고 받고 계신가요? <br /> 종이 명함을 여러 장
          들고다니는 시대는 지났습니다. 스마트 명함 한 장으로 자신을 특별하게
          소개 하세요.
        </p>
        {/* <a href="">
          <button className="button-nvr button-join">
            <span>명함 등록하기</span>
          </button>
        </a> */}
      </div>
      <img src="/img/mainImg.png" className="Img-box-Main-img Img-none" alt="" />
    </div>
  );
}
