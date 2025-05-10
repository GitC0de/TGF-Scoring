import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./selfTestScoring.css";

export default function SelfTestLanguage() {
  const wrongProblems = [];

  let tmpScore = 0;
  let tmpAnswerArray = [];
  let tmpShowAnswerArray = [];
  let answer = "";
  let slash = 0;

  const nav = useNavigate();

  const [rightAnswer, setRightAnswer] = useState("");
  const [questionScore, setQuestionScore] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [totalScore, setTotalScore] = useState(0);
  const [totalRealScore, setTotalRealScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  const [rightAnswerArray, setRightAnswerArray] = useState([]);

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    answers.forEach((item, index) => {
      if (item.length >= 5 && inputRef.current[index + 1]) {
        inputRef.current[index + 1].focus();
      }
    });
  }, [answers]);

  const enterAnswer = () => {
    if (rightAnswer.length !== questionScore.length) {
      alert("입력한 답 개수와 배점 개수가 일치하지 않습니다!");
    } else {
      setIsEntered(true);
      for (let i = 0; i < questionScore.length; i++) {
        tmpScore += parseInt(questionScore[i]);
      }
      setTotalRealScore(tmpScore);
      tmpAnswerArray = rightAnswer.split("");
      tmpAnswerArray.map((item) => {
        item === "1"
          ? tmpShowAnswerArray.push("①")
          : item === "2"
          ? tmpShowAnswerArray.push("②")
          : item === "3"
          ? tmpShowAnswerArray.push("③")
          : item === "4"
          ? tmpShowAnswerArray.push("④")
          : tmpShowAnswerArray.push("⑤");
      });
      setRightAnswerArray(tmpShowAnswerArray);
      tmpScore = 0;
      tmpAnswerArray = [];
    }
  };

  const reviseAnswer = () => {
    setIsEntered(false);
  };

  const clearAnswer = () => {
    setRightAnswer("");
    setQuestionScore("");
    setIsEntered(false);
  };

  const handleAnswer = (index, value) => {
    let tmpAnswers = [...answers];
    tmpAnswers[index] = value;
    setAnswers(tmpAnswers);
  };

  const scoring = () => {
    answers.map((item) => (answer += item));

    if (answer.length !== 20) {
      alert("답 개수가 " + answer.length + "개입니다. 다시 입력해주세요.");
    } else {
      for (let i = 0; i < rightAnswer.length; i++) {
        if (parseInt(answer[i]) === parseInt(rightAnswer[i])) {
          tmpScore += parseInt(questionScore[i]);
        } else {
          wrongProblems.push(String(i + 1) + " ");
          slash += 1;
        }
        if (i % 5 === 4 && slash !== 0) {
          wrongProblems.push("/ ");
          slash = 0;
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
    setAnswers(["", "", "", ""]);
    setTotalScore(0);
    setWrong([]);
    inputRef.current[0].focus();
  };

  return (
    <>
      <h1>탐구 채점</h1>

      <div>
        {isEntered ? (
          <>
            <div className="test-info-confirmation">
              <p>
                총 문제 수는 <strong>{rightAnswer.length}</strong>문제이고,
                총점은 <strong>{totalRealScore}</strong>
                점입니다. 맞다면 채점하고, 틀리면 "수정" 버튼을 눌러서
                수정해주세요!
              </p>
            </div>
            <table className="self-test-table">
              <thead></thead>
              <tbody>
                <tr>
                  <td className="self-test-item">
                    <h4>문항</h4>
                  </td>
                  {rightAnswerArray.map((item, index) => {
                    return (
                      <td className="self-test-item" key={index}>
                        {index + 1}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="self-test-item">
                    <h4>정답</h4>
                  </td>
                  {rightAnswerArray.map((item, index) => {
                    return (
                      <td className="self-test-item" key={index}>
                        {item}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="self-test-item">
                    <h4>배점</h4>
                  </td>
                  {rightAnswerArray.map((item, index) => {
                    return (
                      <td className="self-test-item" key={index}>
                        {questionScore[index]}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>

            <button onClick={reviseAnswer} className="scoringButton">
              수정
            </button>
            <button onClick={clearAnswer} className="clearButton">
              초기화
            </button>
          </>
        ) : (
          <>
            <p className="manual">
              1. 실제 답과 문제당 배점을 <strong>"숫자"</strong>만 입력해
              주세요! (ex. 5243... 2232...)
            </p>
            <input
              placeholder="실제 답 입력"
              value={rightAnswer}
              onChange={(e) => setRightAnswer(e.target.value)}
              className={isEntered ? "answerInput readonly" : "answerInput"}
              readOnly={isEntered}
            ></input>
            <input
              placeholder="문제 당 배점 입력"
              value={questionScore}
              onChange={(e) => setQuestionScore(e.target.value)}
              className={isEntered ? "answerInput readonly" : "answerInput"}
              readOnly={isEntered}
            ></input>
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
        {answers.map((item, index) => (
          <input
            placeholder={`${5 * index + 1}~${5 * (index + 1)}번 입력`}
            value={item}
            onChange={(e) => handleAnswer(index, e.target.value)}
            onKeyDown={scoringByKey}
            className="answerInput"
            ref={(el) => {
              inputRef.current[index] = el;
            }}
          ></input>
        ))}
      </div>
      <button onClick={scoring} className="scoringButton">
        채점(Enter)
      </button>
      <button onClick={clear} className="clearButton">
        초기화(ESC)
      </button>
      <button onClick={() => nav("/self-test")} className="mainButton">
        과목 재선택
      </button>
      <h2>총점 : {totalScore}점</h2>
      <h2>
        틀린 문제(3점은 <span style={{ color: "red" }}>빨간색</span>으로 표시) :{" "}
        {wrong.map((i) =>
          questionScore[i - 1] === "3" ? (
            <span style={{ color: "red" }}>{i}</span>
          ) : questionScore[i - 1] === "2" ? (
            <span>{i}</span>
          ) : (
            <span>{i}</span>
          )
        )}
      </h2>
    </>
  );
}
