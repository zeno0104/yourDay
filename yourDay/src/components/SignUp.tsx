import { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();
  const onIdHandler = (e) => {
    setId(e.target.value);
  };
  const onPwHandler = (e) => {
    setPw(e.target.value);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (id && pw) {
      axios
        .post("http://localhost:3000/signup", {
          id: id,
          password: pw,
        })
        .then((res) => {
          alert("로그인이 완료되었습니다.");
          navigate("/home");
        })
        .catch((err) => {
          console.log(`회원가입 실패: ${err}`);
          alert("아이디 혹은 비밀번호를 확인하세요");
          setPw("");
        });
    }
  };

  return (
    <div className={styles.container}>
      <form action="#" method="GET" className={styles.loginForm}>
        <div className={styles.inputRow}>
          <label htmlFor="idInput">아이디</label>
          <input type="text" value={id} onChange={onIdHandler} />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="pwInput">비밀번호</label>
          <input type="text" value={pw} onChange={onPwHandler} />
        </div>
        <div className={styles.confirmBtn}>
          <button onClick={loginHandler}>로그인</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
