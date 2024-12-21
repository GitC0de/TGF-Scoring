import { React, useState, useRef, useEffect } from "react";
import "./System.css";
import "./ConceptTestScoring.css";
export default function InputAllSystem() {
  const rightAnswer = [1234, 12, 12, 24, 345, 25, 1235, 4, 135, 235];

  const questionScore = 5;

  const wrongProblems = [];

  let score = 0;
  let answer = "";

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");
  const [answer10, setAnswer10] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  const firstRef = useRef("");
  const secondRef = useRef("");
  const thirdRef = useRef("");
  const fourthRef = useRef("");

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  const scoring = () => {
    answer =
      answer1 +
      " " +
      answer2 +
      " " +
      answer3 +
      " " +
      answer4 +
      " " +
      answer5 +
      " " +
      answer6 +
      " " +
      answer7 +
      " " +
      answer8 +
      " " +
      answer9 +
      " " +
      answer10;
    for (let i = 0; i < 10; i++) {
      if (parseInt(answer.split(" ")[i]) === rightAnswer[i]) {
        score += questionScore;
      } else {
        wrongProblems.push(i + 1 + " ");
      }
    }

    if (wrongProblems.length === 0) {
      wrongProblems.push("없음");
    }
    setTotalScore(score);
    setWrong(wrongProblems);
  };

  const scoringByKey = (e) => {
    if (e.key === "Enter") {
      scoring();
    } else if (e.key === "Escape") {
      clear();
    }
  };

  const clear = () => {
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setAnswer5("");
    setAnswer6("");
    setAnswer7("");
    setAnswer8("");
    setAnswer9("");
    setAnswer10("");
    setTotalScore(0);
    setWrong([]);
    firstRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <div>
          <div className="answer-container">
            <label>1번</label>
            <input
              placeholder="1 답 입력"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={firstRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>2번</label>
            <input
              placeholder="2 답 입력"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={secondRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>3번</label>
            <input
              placeholder="3 답 입력"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={thirdRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>4번</label>
            <input
              placeholder="4 답 입력"
              value={answer4}
              onChange={(e) => setAnswer4(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>5번</label>
            <input
              placeholder="5 답 입력"
              value={answer5}
              onChange={(e) => setAnswer5(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
        </div>
        <div>
          <div className="answer-container">
            <label>6번</label>
            <input
              placeholder="6 답 입력"
              value={answer6}
              onChange={(e) => setAnswer6(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>7번</label>
            <input
              placeholder="7 답 입력"
              value={answer7}
              onChange={(e) => setAnswer7(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>8번</label>
            <input
              placeholder="8 답 입력"
              value={answer8}
              onChange={(e) => setAnswer8(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>9번</label>
            <input
              placeholder="9 답 입력"
              value={answer9}
              onChange={(e) => setAnswer9(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
          <div className="answer-container">
            <label>10번</label>
            <input
              placeholder="10 답 입력"
              value={answer10}
              onChange={(e) => setAnswer10(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={fourthRef}
            ></input>
          </div>
        </div>
      </div>
      <button onClick={scoring} className="scoringButton">
        채점(Enter)
      </button>
      <button onClick={clear} className="clearButton">
        초기화(ESC)
      </button>
      <h2>총점 : {totalScore}점</h2>
      <h2>틀린 문제 : {wrong}</h2>
    </>
  );
}

/*
<button onClick={() => alert("개발 중입니다!")} className="scoringButton">
        상세 보기
      </button>
*/
