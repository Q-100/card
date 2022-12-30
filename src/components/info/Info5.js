import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
export default function Info5(props) {
  let navigate = useNavigate();
  return (
    <div className="Info Info-reverse">
      <div className="Img-box">
        <img src="/img/NFCImg.png" className="Img-box" alt="" />
      </div>
      <div className="Info-contents">
        <p className="Sub-title">NFC 활용</p>
        <h2>NFC를 이용한 다양한 경험</h2>
        <p>
          NFC는 무궁무진한 가능성을 가지고 있습니다. 기업에서 필요한 제품을 NVR
          Enterprise에서 확인하세요.
        </p>
        <a
          href=""
          onClick={() => {
            navigate("/enterprise");
          }}
        >
          NVR Enterprise 바로가기{" "}
          <img src="/img/Arrow 3.png" alt="" className="Arrow-rotate" />
        </a>
      </div>
    </div>
  );
}
