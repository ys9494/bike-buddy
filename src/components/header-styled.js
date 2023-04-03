import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #fff;
`;

export const AlignCenter = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 1.4rem;
    font-weight: bold;
    color: green;
  }
`;

export const NavContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

export const GotoAccount = styled.div`
  display: flex;
  justify-content: right;
  a,
  span {
    font-size: 1rem;
    margin-left: 20px;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: right;
  a {
    font-size: 18px;
    margin-left: 40px;
    transition: all 0.2s;
    font-weight: bold;
    &:hover {
      color: green;
    }
  }
`;
