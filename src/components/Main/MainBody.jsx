import React from "react";
import styled from "styled-components";
import sight from "../../assets/sight.jpg";
import 사과꽃 from "../../assets/사과꽃.jpg";
import 사과 from "../../assets/사과.jpg";
import 사과들 from "../../assets/사과들.jpg";

const MainBody = () => {
  return (
    <MainBodyContainer>
      <h1>안녕하세요. 영주 부석사 아래에 위치한 가족농원 주인장 부부입니다.</h1>
      <h1>저희는 사과 재배와 더불어 작은 텃밭을 가꾸고 있어요.</h1>
      <ImgWrapper>
        <img src={sight} alt="과수원 사진" />
        <img src={사과꽃} alt="사과꽃 사진" />
        <img src={사과} alt="사과 사진" />
        <img src={사과들} alt="사과들 사진" />
      </ImgWrapper>
    </MainBodyContainer>
  );
};

export default MainBody;

const MainBodyContainer = styled.div`
  padding: 0 30px;
  flex-direction: column;
  text-align: center;
  height: 675px;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  img {
    height: 300px;
    width: 500px;
    margin-right: 10px;
  }
`;
