import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <span className="title">가족농원</span>
        <span className="subtitle">영주 부석사아래</span>
      </div>
      <NavWrapper>
        <NavLink to={"/"}>가족농원 홈</NavLink>
        {/* <NavLink to={"/intro"}>가족농원 소개</NavLink> */}
        <NavLink to={"/order"}>주문 방법</NavLink>
        <NavLink to={"/location"}>오시는 길</NavLink>
        {/* <NavLink to={"/purchase"}>가족농원 스토어팜</NavLink> */}
      </NavWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 150px;
  background-color: #c1a87f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 50px;
    margin: 0 20px;
  }
  .subtitle {
    font-size: 30px;
  }
`;

const NavWrapper = styled.div`
  margin: 80px 100px 0 0;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 24px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #e8dcc6;
    border-bottom: 2px solid #e8dcc6;
  }
`;
