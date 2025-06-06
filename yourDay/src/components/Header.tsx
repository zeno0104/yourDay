import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [status, setStatus] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="" className={styles.logo} />
      </div>
      {status ? (
        <div className={styles.login}>
          <div className={styles.signUp}>
            <Link to={"/signup"}>로그인</Link>
          </div>
          <div className={styles.signIn}>
            <Link to={"/signin"}>회원가입</Link>
          </div>
        </div>
      ) : (
        <div>jaehoon님, 안녕하세요</div>
      )}
    </div>
  );
}

export default Header;
