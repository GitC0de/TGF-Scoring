import { React, useState, useRef, useEffect } from "react";
import "./System.css";
export default function System() {
  const rightAnswer = [
    5, 1, 2, 3, 1, 2, 4, 1, 3, 3, 2, 3, 1, 5, 5, 2, 5, 3, 4, 4,
  ];

  const questionScore = [
    2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3,
  ];

  const wrongProblems = [];

  let score = 0;
  let answer = "";

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  const firstRef = useRef("");
  const secondRef = useRef("");
  const thirdRef = useRef("");
  const fourthRef = useRef("");

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  useEffect(() => {
    answer1.length >= 5 && secondRef.current.focus();
  }, [answer1]);

  useEffect(() => {
    answer2.length >= 5 && thirdRef.current.focus();
  }, [answer2]);

  useEffect(() => {
    answer3.length >= 5 && fourthRef.current.focus();
  }, [answer3]);

  const scoring = () => {
    answer = answer1 + answer2 + answer3 + answer4;

    if (answer.length !== 20) {
      alert("답 개수가 " + answer.length + "개입니다. 다시 입력해주세요.");
    } else {
      for (let i = 0; i < rightAnswer.length; i++) {
        if (parseInt(answer.split("")[i]) === rightAnswer[i]) {
          score += questionScore[i];
        } else {
          wrongProblems.push(String(i + 1) + " ");
        }
      }

      if (wrongProblems.length === 0) {
        wrongProblems.push("없음");
      }
      setTotalScore(score);
      setWrong(wrongProblems);
    }
  };

  const scoringByKey = (e) => {
    if (e.key === "Enter") {
      scoring();
    } else if (e.ctrlKey || e.metaKey) {
      clear();
    }
  };

  const clear = () => {
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setTotalScore(0);
    setWrong([]);
    firstRef.current.focus();
  };

  return (
    <>
      <div>
        <input
          placeholder="1-5 답 입력"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className="answerInput"
          ref={firstRef}
        ></input>
        <input
          placeholder="6-10 답 입력"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          className="answerInput"
          ref={secondRef}
        ></input>
        <input
          placeholder="11-15 답 입력"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          className="answerInput"
          ref={thirdRef}
        ></input>
        <input
          placeholder="16-20 답 입력"
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
          onKeyDown={scoringByKey}
          className="answerInput"
          ref={fourthRef}
          maxLength={5}
        ></input>
      </div>
      <button onClick={scoring} className="scoringButton">
        채점(Enter)
      </button>
      <button onClick={clear} className="clearButton">
        초기화(Ctrl)
      </button>
      <h2>총점 : {totalScore}점</h2>
      <h2>틀린 문제 : {wrong}</h2>
      <button className="scoringButton">상세 보기</button>
    </>
  );
}
