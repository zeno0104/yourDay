import { useNavigate } from "react-router-dom";
import styles from "./Contents.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Contents() {
  const navigate = useNavigate();
  const onBtnHandler = () => {
    navigate("/writePage");
  };
  const [allData, setAllData] = useState([]);
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((response) => {
        setAllData(response.data);
        console.log("백엔드 응답:", response.data);
      })
      .catch((error) => {
        console.error("데이터 불러오기 실패:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/content")
      .then((res) => {
        setAllData(res.data);
        console.log("백엔드 응답:", res.data);
      })
      .catch((err) => {
        console.log("데이터 불러오기 실패: ", err);
      });
  }, []);
  console.log(allData);
  return (
    <div className={styles.container}>
      <section className={styles.write}>
        <button className={styles.writeText} onClick={onBtnHandler}>
          글쓰기
        </button>
      </section>
      <section className={styles.selectMenu}>
        <div>ALL</div>
        <div>|</div>
        <div>MY</div>
      </section>
      <section className={styles.contents}>
        {allData.map((data) => {
          return (
            <div className={styles.contentInfo} key={data.id}>
              <div className={styles.userId}>
                <div>{data.id}</div>
              </div>
              <div className={styles.diaryInfo}>
                <div className={styles.personalInfo}>
                  <div>{data.satisfaction}</div>
                  <div>{data.emotion}</div>
                </div>

                <div>{data.diary}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
export default Contents;
