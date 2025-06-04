import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.container}>
      <Link to={"/mainPage"} className={styles.linkText}>
        Home
      </Link>
      <Link to={"/myPage"} className={styles.linkText}>
        MY
      </Link>
    </div>
  );
}
export default Banner;
