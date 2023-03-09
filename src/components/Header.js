import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  AlignCenter,
  LogoContainer,
  GotoAccount,
  NavContainer,
  Nav,
} from "./header-styled";
import { ROUTE } from "../routes/route";

const Header = () => {
  return (
    <HeaderWrapper>
      <AlignCenter>
        <LogoContainer>
          <div>BikeBuddy</div>
        </LogoContainer>
        <NavContainer>
          <GotoAccount>
            <Link to={ROUTE.LOGIN.link}>로그인</Link>
            <Link to={ROUTE.SGINUP.link}>회원가입</Link>
          </GotoAccount>
          <Nav>
            <Link to="">대여소 보기</Link>
            <Link to="">모임</Link>
          </Nav>
        </NavContainer>
      </AlignCenter>
    </HeaderWrapper>
  );
};

export default Header;