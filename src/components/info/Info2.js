import React, { useState } from "react";
export default function Info2() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Info">
      <div className="Info-contents">
        <h2>| ABOUT NVR SMART CARD</h2>
        <p>
          종이 명함 여러 장을 들고다니는 시대는 지났습니다. <br />
          NVR 명함 한 장으로 여러분을 효과적으로 표현해보세요.
        </p>
        <ul>
          <li>
            <p>
              사람을 만날때마다 소모되는 명함과는 다르게 NVR 명함 한장을
              스마트폰에 인식시켜서 명함의 특별함을 보여주세요.
            </p>
          </li>
          <li>
            <p>
              NVR 명함은 일반 명함보다 많은 정보 제공이 가능하며 버튼
              하나만으로 연락처를 저장할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              일반적인 정보 뿐만 아니라 자신을 소개 할 수 있는 이미지, 정보, 동영상까지 원하는대로 보여줄 수 있습니다.
            </p>
          </li>
        </ul>
        {/* <a href="">
          NFC 명함 등록하기{" "}
          <img src="/img/Arrow 3.png" alt="" className="Arrow-rotate" />
        </a> */}
      </div>
      <div className="Img-box-main Img-box">
        <img src="/img/IphoneImg.png" className="Img-box" alt="" />
      </div>
    </div>
  );
}
