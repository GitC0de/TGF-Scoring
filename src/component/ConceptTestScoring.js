import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./ConceptTestScoring.css";
export default function ConceptTestScoring() {
  const nav = useNavigate();
  const rightAnswer = [
    4, 35, 135, 234, 24, 24, 14, 145, 23, 235, 145, 1345, 15, 25, 345,
  ];

  const questionScore = [3, 3, 3, 4, 4, 3, 3, 3, 4, 3, 3, 4, 4, 3, 3];

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
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState("");
  const [answer15, setAnswer15] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  let checked = [];
  const [isCorrect, setIsCorrect] = useState([]);

  const firstRef = useRef("");
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
      answer10 +
      " " +
      answer11 +
      " " +
      answer12 +
      " " +
      answer13 +
      " " +
      answer14 +
      " " +
      answer15;
    for (let i = 0; i < 15; i++) {
      if (parseInt(answer.split(" ")[i]) === rightAnswer[i]) {
        score += questionScore[i];
        checked.push(1);
      } else {
        wrongProblems.push(i + 1 + " ");
        checked.push(0);
      }
    }

    if (wrongProblems.length === 0) {
      wrongProblems.push("없음");
    }
    setTotalScore(score);
    setWrong(wrongProblems);
    setIsCorrect([...checked]);
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
    setAnswer11("");
    setAnswer12("");
    setAnswer13("");
    setAnswer14("");
    setAnswer15("");
    setTotalScore(0);
    setWrong([]);
    firstRef.current.focus();
    setIsCorrect([]);
  };

  return (
    <>
      <h1>2026 수능 대비 윤도영 1단계 개념반 2주차 TEST 채점(Beta)</h1>
      <p className="confirmation">
        ※ 주차를 확인해주세요! 저번 주차로 되어 있다면, 업데이트가 되지 않은
        것입니다!
      </p>
      <p>
        학생이 기재한 답을 <strong>"작은 숫자"</strong>부터{" "}
        <strong>"숫자"</strong>만 입력해 주세요! (ex. 1235, 24, 5)
      </p>
      <p className="warning">
        ※ 단, 마킹하지 않은 문제는 빈칸으로 남겨 주세요!
      </p>

      <div className="container">
        <div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[0] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>1번 ({questionScore[0]}점)</label>
            <input
              placeholder="1 답 입력"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
              ref={firstRef}
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[1] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>2번 ({questionScore[1]}점)</label>
            <input
              placeholder="2 답 입력"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[2] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>3번 ({questionScore[2]}점)</label>
            <input
              placeholder="3 답 입력"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[3] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>4번 ({questionScore[3]}점)</label>
            <input
              placeholder="4 답 입력"
              value={answer4}
              onChange={(e) => setAnswer4(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[4] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>5번 ({questionScore[4]}점)</label>
            <input
              placeholder="5 답 입력"
              value={answer5}
              onChange={(e) => setAnswer5(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
        </div>
        <div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[5] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>6번 ({questionScore[5]}점)</label>
            <input
              placeholder="6 답 입력"
              value={answer6}
              onChange={(e) => setAnswer6(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[6] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>7번 ({questionScore[6]}점)</label>
            <input
              placeholder="7 답 입력"
              value={answer7}
              onChange={(e) => setAnswer7(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[7] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>8번 ({questionScore[7]}점)</label>
            <input
              placeholder="8 답 입력"
              value={answer8}
              onChange={(e) => setAnswer8(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[8] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>9번 ({questionScore[8]}점)</label>
            <input
              placeholder="9 답 입력"
              value={answer9}
              onChange={(e) => setAnswer9(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[9] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>10번 ({questionScore[9]}점)</label>
            <input
              placeholder="10 답 입력"
              value={answer10}
              onChange={(e) => setAnswer10(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
        </div>
        <div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[10] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>11번 ({questionScore[10]}점)</label>
            <input
              placeholder="11 답 입력"
              value={answer11}
              onChange={(e) => setAnswer11(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[11] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>12번 ({questionScore[11]}점)</label>
            <input
              placeholder="12 답 입력"
              value={answer12}
              onChange={(e) => setAnswer12(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[12] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>13번 ({questionScore[12]}점)</label>
            <input
              placeholder="13 답 입력"
              value={answer13}
              onChange={(e) => setAnswer13(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[13] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>14번 ({questionScore[13]}점)</label>
            <input
              placeholder="14 답 입력"
              value={answer14}
              onChange={(e) => setAnswer14(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
            ></input>
          </div>
          <div
            className={
              isCorrect.length === 0
                ? "answer-container"
                : isCorrect[14] === 1
                ? "answer-container true"
                : "answer-container false"
            }
          >
            <label>15번 ({questionScore[14]}점)</label>
            <input
              placeholder="15 답 입력"
              value={answer15}
              onChange={(e) => setAnswer15(e.target.value)}
              onKeyDown={scoringByKey}
              className="answerInput"
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

      <div>
        {/* <button onClick={() => nav("/full-test")} className="modeButton"> */}
        <button
          onClick={() => alert("아직 준비중입니다!")}
          className="modeButton"
        >
          2/3단계 ver. 채점
        </button>

        <button onClick={() => nav("/")} className="mainButton">
          메인 화면
        </button>
      </div>
    </>
  );
}

/*
<button onClick={() => alert("개발 중입니다!")} className="scoringButton">
        상세 보기
      </button>
*/
