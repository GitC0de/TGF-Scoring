import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
export default function FullTestScoring() {
  const nav = useNavigate();
  const rightAnswer = [
    5, 5, 2, 1, 2, 4, 3, 3, 4, 3, 1, 2, 5, 3, 4, 5, 1, 3, 5, 2,
  ];

  const questionScore = [
    2, 2, 3, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 2, 3, 3,
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
    // answer = answer1 + answer2 + answer3 + answer4;

    // if (answer.length !== 20) {
    //   alert("답 개수가 " + answer.length + "개입니다. 다시 입력해주세요.");
    // } else {
    //   for (let i = 0; i < rightAnswer.length; i++) {
    //     if (parseInt(answer.split("")[i]) === rightAnswer[i]) {
    //       score += questionScore[i];
    //     } else {
    //       wrongProblems.push(String(i + 1) + " ");
    //     }
    //   }

    //   if (wrongProblems.length === 0) {
    //     wrongProblems.push("없음");
    //   }
    //   setTotalScore(score);
    //   setWrong(wrongProblems);
    // }
    alert("아직 준비 중입니다!");
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
    setTotalScore(0);
    setWrong([]);
    firstRef.current.focus();
  };

  return (
    <>
      <h1>2026 AS 1주차 채점(Beta)</h1>
      <p className="confirmation">
        ※ 주차를 확인해주세요! 저번 주차로 되어 있다면, 업데이트가 되지 않은
        것입니다!
      </p>
      <p>
        학생이 기재한 답을 <strong>"숫자"</strong>만 입력해 주세요! (ex.
        5243...)
      </p>
      <p className="warning">※ 단, 마킹하지 않은 문제는 0을 입력해 주세요!</p>

      <div>
        <input
          placeholder="1-5 답 입력"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          onKeyDown={scoringByKey}
          className="answerInput"
          ref={firstRef}
        ></input>
        <input
          placeholder="6-10 답 입력"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          onKeyDown={scoringByKey}
          className="answerInput"
          ref={secondRef}
        ></input>
        <input
          placeholder="11-15 답 입력"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          onKeyDown={scoringByKey}
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
        초기화(ESC)
      </button>
      <h2>총점 : {totalScore}점</h2>
      <h2>틀린 문제 : {wrong}</h2>

      <div>
        <button onClick={() => nav("/concept-test")} className="modeButton">
          1단계 ver. 채점
        </button>
        <button onClick={() => nav("/")} className="mainButton">
          메인 화면
        </button>
      </div>

      <p className="uxHelp">※ UX 설계 도움 : 안유주</p>
    </>
  );
}

/*
<button onClick={() => alert("개발 중입니다!")} className="scoringButton">
        상세 보기
      </button>
*/
