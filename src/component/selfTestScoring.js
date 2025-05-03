import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./selfTestScoring.css";
export default function SelfTestScoring() {
  const nav = useNavigate();

  const wrongProblems = [];

  let tmpScore = 0;
  let answer = "";

  const [rightAnswer, setRightAnswer] = useState("");
  const [questionScore, setQuestionScore] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [totalScore, setTotalScore] = useState(0);
  const [totalRealScore, setTotalRealScore] = useState(0);
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

  const enterAnswer = () => {
    if (rightAnswer.length !== questionScore.length) {
      alert("입력한 답 개수와 배점 개수가 일치하지 않습니다!");
    } else {
      setIsEntered(true);
      for (let i = 0; i < questionScore.length; i++) {
        tmpScore += parseInt(questionScore[i]);
      }
      setTotalRealScore(tmpScore);
      tmpScore = 0;
    }
  };

  const reviseAnswer = () => {
    setIsEntered(false);
  };

  const scoring = () => {
    answer = answer1 + answer2 + answer3 + answer4;

    if (answer.length !== 20) {
      alert("답 개수가 " + answer.length + "개입니다. 다시 입력해주세요.");
    } else {
      for (let i = 0; i < rightAnswer.length; i++) {
        if (parseInt(answer[i]) === parseInt(rightAnswer[i])) {
          tmpScore += parseInt(questionScore[i]);
        } else {
          wrongProblems.push(String(i + 1) + " ");
        }
      }

      if (wrongProblems.length === 0) {
        wrongProblems.push("없음");
      }
      setTotalScore(tmpScore);
      setWrong(wrongProblems);

      console.log(rightAnswer[0]);
    }
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
      <h1>사용자 정의 모드 채점(Beta)</h1>
      <p className="manual">
        1. 먼저, 실제 답과 문제당 배점을 <strong>"숫자"</strong>만 입력해
        주세요! (ex. 5243... 2232... // 아직 20문항인 경우(...)에만 사용
        가능합니다)
      </p>
      <div>
        <input
          placeholder="실제 답 입력"
          value={rightAnswer}
          onChange={(e) => setRightAnswer(e.target.value)}
          className="answerInput"
          readOnly={isEntered}
        ></input>
        <input
          placeholder="문제 당 배점 입력"
          value={questionScore}
          onChange={(e) => setQuestionScore(e.target.value)}
          className="answerInput"
          readOnly={isEntered}
        ></input>
        {isEntered ? (
          <>
            <button onClick={reviseAnswer} className="scoringButton">
              수정
            </button>
            <div className="test-info-confirmation">
              <p>
                총 문제 수는 <strong>{rightAnswer.length}</strong>문제이고,
                총점은 <strong>{totalRealScore}</strong>
                점입니다. 맞다면 채점하고, 틀리면 "수정" 버튼을 눌러서
                수정해주세요!
              </p>
            </div>
          </>
        ) : (
          <>
            <button onClick={enterAnswer} className="scoringButton">
              입력
            </button>
            <div className="test-info-confirmation"></div>
          </>
        )}
      </div>
      <p className="manual">
        2. 그 다음, 입력한 답을 <strong>"숫자"</strong>만 입력해 주세요! (ex.
        5243...)
      </p>
      <p className="warning">
        ※ 단, 마킹하지 않은 문제는 0을 입력해 주세요!
        <br></br>※ 하나의 답안으로 여러 번 채점할 때에는 "초기화" 버튼을
        사용하세요 (새로고침 시 답안 초기화됨... 주의!!)
      </p>

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
      <button onClick={() => nav("/")} className="mainButton">
        메인 화면
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
