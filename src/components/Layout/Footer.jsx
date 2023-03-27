import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <RootContainer>
        <div>상호명 : 영주부석사아래 가족농원</div>
        <div>소재지 : 경상북도 영주시 부석면 봉황산로78번길 10-1</div>
        <div>대표자 : 장두영</div>
        <div>전화번호 : 010-6215-1060</div>
      </RootContainer>
    </>
  );
};

export default Footer;

const RootContainer = styled.div`
  background-color: #c1a87f;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  div {
    margin: 0 20px;
  }
`;
