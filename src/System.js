import { React, useState } from "react";
/* import "./System.css"; */
export default function System() {
  const rightAnswer = [
    5, 5, 1, 5, 3, 2, 4, 4, 2, 1, 5, 3, 4, 2, 5, 4, 3, 4, 1, 3,
  ];

  const questionScore = [
    2, 2, 2, 2, 3, 2, 3, 2, 2, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 2,
  ];

  const wrongProblems = [];

  let score = 0;

  const [answer, setAnswer] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  const scoring = () => {
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

  const clear = () => {
    setAnswer("");
    setTotalScore(0);
    setWrong([]);
  };

  return (
    <>
      <input
        placeholder="답을 입력하세요!"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      ></input>
      <button onClick={scoring} className="scoringButton">
        채점
      </button>
      <button onClick={clear} className="clearButton">
        초기화
      </button>
      <h2>총점 : {totalScore}점</h2>
      <h2>틀린 문제 : {wrong}</h2>
    </>
  );
}
