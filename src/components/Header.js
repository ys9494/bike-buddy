import { Link, useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  AlignCenter,
  LogoContainer,
  GotoAccount,
  NavContainer,
  Nav,
} from "./header-styled";
import { ROUTE } from "../routes/route";
import { useUserDispatch, useUserState } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Header = () => {
  const { isLoggedIn } = useUserState();
  const dispatch = useUserDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({
        type: "LOGIN",
        isLoggedIn: true,
      });
    } else {
      dispatch({
        type: "LOGOUT",
        isLoggedIn: false,
      });
    }
  }, []);

  const logoutSubmit = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
      console.log("로그아웃 완료");
    }
  };

  return (
    <HeaderWrapper>
      <AlignCenter>
        <LogoContainer>
          <Link to="/">BikeBuddy</Link>
        </LogoContainer>
        <NavContainer>
          {isLoggedIn ? (
            <GotoAccount>
              <Link to={ROUTE.MYGATHERING.link}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <span onClick={logoutSubmit}>로그아웃</span>
            </GotoAccount>
          ) : (
            <GotoAccount>
              <Link to={ROUTE.LOGIN.link}>로그인</Link>
              <Link to={ROUTE.SGINUP.link}>회원가입</Link>
            </GotoAccount>
          )}

          <Nav>
            <Link to={ROUTE.RENTALLOCATION.link}>대여소 정보</Link>
            <Link to={ROUTE.GATHERING_LIST.link}>모임</Link>
          </Nav>
        </NavContainer>
      </AlignCenter>
    </HeaderWrapper>
  );
};

export default Header;
