import { useState } from "react";
import Header from "../components/Header";
import styles from "./WritePage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WritePage() {
  const navigate = useNavigate();
  const [selectedSatisfaction, setSelectedSatisfaction] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [writeOneLine, setWriteOneLine] = useState("");
  const selectedSatisfactionHandler = (statisfaction: string) => {
    setSelectedSatisfaction(statisfaction);
  };
  const selectedEmotionHandler = (emotion: string) => {
    console.log(emotion);
    setSelectedEmotion(emotion);
  };
  const writeOneLineHandler = (e) => {
    setWriteOneLine(e.target.value);
  };
  const confirmBtnHandler = () => {
    axios
      .post("http://localhost:3000/write", {
        id: "jaehun0104",
        satisfaction: selectedSatisfaction,
        emotion: selectedEmotion,
        diary: writeOneLine,
      })
      .then((res) => {
        console.log(`기록 완료!`);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(selectedSatisfaction, selectedEmotion, writeOneLine);
  };
  const satisfactions = ["매우좋음", "좋음", "보통", "나쁨", "매우나쁨"];
  const emotions = [
    "신나는",
    "편안한",
    "뿌듯한",
    "기대되는",
    "행복한",
    "의욕적인",
    "설레는",
    "상쾌한",
    "차분한",
    "감사한",
    "우울한",
    "외로운",
    "불안한",
    "슬픈",
    "화난",
    "부담되는",
    "짜증나는",
    "피곤함",
    "스트레스",
    "지루한",
  ];

  return (
    <div className={styles.conatiner}>
      <section>
        <Header />
      </section>
      <div className={styles.contentsContainer}>
        <section className={styles.write}>
          <div className={styles.todaySatisfaction}>
            <div className={styles.satisfactionText}>만족도</div>
            <div className={styles.satisfactionType}>
              <div className={styles.satisfactionType}>
                {satisfactions.map((satisfaction) => (
                  <div
                    key={satisfaction}
                    className={`${styles.emotionItem} ${
                      selectedSatisfaction === satisfaction
                        ? styles.selected
                        : ""
                    }`}
                    onClick={() => selectedSatisfactionHandler(satisfaction)}
                  >
                    {satisfaction}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.todaySatisfaction}>
            <div className={styles.satisfactionText}>감정</div>
            <div className={styles.satisfactionType}>
              <div className={styles.satisfactionType}>
                {emotions.map((emotion) => (
                  <div
                    key={emotion}
                    className={`${styles.emotionItem} ${
                      selectedEmotion === emotion ? styles.selected : ""
                    }`}
                    onClick={() => selectedEmotionHandler(emotion)}
                  >
                    {emotion}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.writeOneLine}>
          <div>한줄 일기</div>
          <textarea
            className={styles.textArea}
            maxLength={300}
            onChange={writeOneLineHandler}
          ></textarea>
        </section>
        {/* <section className={styles.todayPicture}>
          <div>오늘의 사진</div>
        </section> */}
        <section className={styles.confirmBtn} onClick={confirmBtnHandler}>
          <button className={styles.confirmBtnText}>기록하기</button>
        </section>
      </div>
    </div>
  );
}
export default WritePage;
