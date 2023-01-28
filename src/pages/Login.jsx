import { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // 아이디를 입력받아 변수 userId에 저장하는 함수
  const handleId = (e) => {
    setUserId(e.target.value);
  };

  // 비빌번호를 입력받아 변수 password에 저장하는 함수
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼을 눌렀을 시 해당 user의 정보를 받아오는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="title login">로그인 하기</h1>
        <input
          type="text"
          id="account"
          className="input-login"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={handleId}
        />
        <input
          type="password"
          id="password"
          className="input-login"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn login">
          로그인
        </button>
      </form>
    </main>
  );
}

export default Login;
