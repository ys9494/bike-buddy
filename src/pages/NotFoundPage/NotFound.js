import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>
        <span>404</span> | 요청하신 페이지를 찾을 수 없습니다.
      </h1>
    </NotFoundWrapper>
  );
};

export default NotFound;

export const NotFoundWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 18px;

    span {
      font-weight: bold;
    }
  }
`;
