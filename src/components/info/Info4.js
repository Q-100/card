import React, { useState } from "react";

export default function Info4(props) {
  const title = props.title;
  const content = props.content;
  return (
    <div className="Info">
      <div className="Info-contents">
        <p className="Sub-title">미팅 약속 잡기 </p>
        <h2>
          편리하게 약속을 잡을 수 있는 <br /> 일정 요청 서비스 (베타)
        </h2>
        <p>
          언제까지 미팅을 메일이나 전화로 잡으실 건가요? <br /> NFC 명함 내에
          있는 미팅 서비스로 편리하게 상대방과의 약속을 잡아보세요.
        </p>
      </div>
      <div className="Img-box">
        <img src="/img/schedule_img.png" className="Img-box" alt="" />
      </div>
    </div>
  );
}
