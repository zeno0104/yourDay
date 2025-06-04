import { useState } from "react";
import styles from "./SignIn.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const navigate = useNavigate();
  const onIdHandler = (e) => {
    setId(e.target.value);
  };
  const onPwHandler = (e) => {
    setPw(e.target.value);
  };
  const onPwCheckHandler = (e) => {
    setPwCheck(e.target.value);
  };
  const checkUserInfo = (e) => {
    e.preventDefault();
    if (id && pw && pw === pwCheck) {
      axios
        .post("http://localhost:3000/signin", {
          id: id,
          password: pw,
        })
        .then((res) => {
          console.log("서버 응답: ", res.data);
          alert("회원가입이 완료되었습니다.");
          navigate("/signin");
        })
        .catch((err) => {
          console.log("회원가입 실패: ", err);
          alert("회원가입이 실패하였습니다.");
        });
    } else {
      alert("아이디 혹은 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className={styles.container}>
      <form action="#" method="POST" className={styles.signinForm}>
        <div className={styles.id}>
          <div>
            <label htmlFor="id">ID</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="아이디 입력"
              value={id}
              onChange={onIdHandler}
            />
            <button>중복확인</button>
          </div>
        </div>
        <div className={styles.pw}>
          <div>
            <label htmlFor="pw">PW</label>
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={pw}
              onChange={onPwHandler}
            />
          </div>
        </div>
        <div className={styles.pwCheck}>
          <div>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheck}
              onChange={onPwCheckHandler}
            />
            {pwCheck &&
              (pw === pwCheck ? (
                <div className={styles.pwCheckOne}>비밀번호가 일치합니다.</div>
              ) : (
                <div className={styles.pwCheckTwo}>
                  비밀번호가 일치하지 않습니다.
                </div>
              ))}
          </div>
        </div>
        <div className="signIn">
          <button onClick={checkUserInfo}>가입하기</button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
