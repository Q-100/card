import React, { useState } from "react";

export default function Info3(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className="Info Info-reverse">
      <div className="Img-box Img-box-sns">
        <img src="/img/sns_Iphone.png" className="Img-box" alt="" />
      </div>
      <div className="Info-contents">
        <p className="Sub-title">하나의 프로필</p>
        <h2>앱 없이 모든 프로필과 정보를 한 곳으로</h2>
        <p>
          온라인의 다양한 SNS 정보를 NVR 명함 안에 넣어 상대방에게 손쉽게
          공유할 수 있습니다. 특별한 앱이 필요없이 말이죠.
        </p>
      </div>
    </div>
  );
}
