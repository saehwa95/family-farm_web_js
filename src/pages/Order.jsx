import React from "react";
import styled from "styled-components";
import OrderBody from "../components/Order/OrderBody";

const Order = () => {
  return (
    <OrderContainer>
      <OrderBody />
    </OrderContainer>
  );
};

export default Order;

const OrderContainer = styled.div`
  min-height: calc(100vh - 250px);
`;
