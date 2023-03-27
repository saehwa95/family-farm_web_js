import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StoreFarm = () => {
  return (
    <>
      <StoreLink to={'https://smartstore.naver.com/family-applefarm'}>
        <div>👉 가족농원 스토어팜에서 주문하기</div>
      </StoreLink>
    </>
  );
};

export default StoreFarm;

const StoreLink = styled(Link)`
  padding: 10px;
  margin: 10px;
  font-size: 24px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  cursor: pointer;

  div {
    border: 2px solid #c1a87f;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 400px;
    background-color: #e8dcc6;
    border-radius: 10px;
    :hover {
      background-color: #c1a87f;
    }
  }
`;
