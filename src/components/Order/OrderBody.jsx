import React from "react";
import styled from "styled-components";
import StoreFarm from "./StoreFarm";

const OrderBody = () => {
  return (
    <OrderBodyContainer>
      <div className="title">🍎주문 방법🍎</div>
      <h2>✔️ 전화 또는 문자 문의 주시면 가격표를 전송해드립니다.</h2>
      <h2>
        ✔️ 가격표 확인 후 주문하시거나 도움이 필요한 고객님의 경우
        이야기해주시면 안내드리겠습니다.
      </h2>
      <h2>
        ✔️ 스토어팜 주문을 원하시는 경우 아래의 링크 접속을 통해 주문이
        가능합니다.
      </h2>
      <StoreFarm />
      <div className="information">
        <div>
          <h2> ☎️ 전화번호</h2>
          <h3>010-6215-1060</h3>
        </div>
        <div>
          <h2>계좌번호</h2>
          <h3>농협은행 351-0731-3607-33 (예금주 : 장두영)</h3>
          <h3>기업은행 010-6215-1060 (예금주 : 장두영)</h3>
        </div>
      </div>
    </OrderBodyContainer>
  );
};

export default OrderBody;

const OrderBodyContainer = styled.div`
  height: auto;
  padding: 30px 30px;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 50px;
  }
  .information {
    border: 1px solid #ffffff;
    border-radius: 10px;
    background-color: #c1a87f;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    margin: 50px 0 0 0;
    gap: 100px;
  }
  h2,
  h3 {
    margin: 7px 0;
  }
`;
