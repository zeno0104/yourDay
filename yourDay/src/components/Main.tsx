import Header from "./Header";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <img src="./logo.png" alt="" />
    </div>
  );
}
export default Main;
