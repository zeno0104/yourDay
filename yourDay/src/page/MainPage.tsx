import Banner from "../components/Banner";
import Contents from "../components/Contents";
import Header from "../components/Header";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <div className={styles.contextsContainer}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.contents}>
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
