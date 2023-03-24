import React from "react";
import styled from "styled-components";

const Order = () => {
  return (
    <Wrapper>
      <div>주문 방법</div>
      <div>네이버 스토어팜 링크 추가</div>
    </Wrapper>
  );
};

export default Order;

const Wrapper = styled.div`
  min-height: calc(100vh - 250px);
`;
