import axios from "axios";

const api = axios.create({
  baseURL: "http://kdt-ai6-team10.elicecoding.com:3003",
});

//endpoint : baseUrl 뒤에 오는 path
// ex) 로그인일때, endpoint는 '/login'

async function get(endpoint) {
  console.log(`GET요청 : ${endpoint}`);

  return api.get(endpoint, {
    // jwt 토큰 헤더에 담아서 백엔드 서버에 보냄
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

async function post(endpoint, data) {
  // JSON.stringify 함수 : JS객체를 JSON 형태로 변환
  const bodyData = JSON.stringify(data);
  console.log(`POST 요청 : ${endpoint}`);
  // console.log(`POST 요청 데이터 : ${bodyData}`);

  return api.post(endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      // JWT 토큰
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

async function patch(endpoint, data) {
  // JSON.stringify 함수 : JS객체를 JSON 형태로 변환
  const bodyData = JSON.stringify(data);
  console.log(`PATCH 요청 : ${endpoint}`);
  // console.log(`PATCH 요청 데이터 : ${bodyData}`);

  return api.put(endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      // JWT 토큰
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

// 아래 함수명 : delete 단어는 예약어라서
// 여기서는 우선 delete 대신 del로 쓰고 아래 export시에 delete로 alias 함
async function del(endpoint) {
  console.log(`DELETE요청 : ${endpoint}`);

  return api.delete(endpoint, {
    // jwt 토큰 헤더에 담아서 백엔드 서버에 보냄
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}

// 아래처럼 export 한 후,
// import * as API 방식으로 가져오면
// API.get, API.post 이런 식으로 쓸 수 있음
export { api, get, post, patch, del as delete };
