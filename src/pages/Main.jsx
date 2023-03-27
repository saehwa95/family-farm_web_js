import React from "react";
import styled from "styled-components";
import MainBody from "../components/Main/MainBody";

const Main = () => {
  return (
    <Wrapper>
      <MainBody />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  min-height: calc(100vh - 250px);
`;
