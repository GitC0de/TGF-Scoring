import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./FullTestScoring.css";
export default function FullTestScoring() {
  const nav = useNavigate();

  const wrongProblems = [];
  const showRightAnswer = [];

  let score = 0;
  let answer = "";
  let slash = 0;

  const [isAnsEntered, setIsAnsEntered] = useState(false);
  const [rightAnswer, setRightAnswer] = useState([]);

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [totalScore, setTotalScore] = useState(51);
  const [wrong, setWrong] = useState([]);

  const rightAnswerRef = useRef([]);

  const firstRef = useRef("");
  const secondRef = useRef("");

  useEffect(() => {
    rightAnswerRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    rightAnswer.forEach((item, index) => {
      if (item.length >= 1 && rightAnswerRef.current[index + 1]) {
        rightAnswerRef.current[index + 1].focus();
      }
    });
  }, [rightAnswer]);

  useEffect(() => {
    answer1.length >= 5 && secondRef.current.focus();
  }, [answer1]);

  rightAnswer.map((item) => {
    item === "1"
      ? showRightAnswer.push("①")
      : item === "2"
      ? showRightAnswer.push("②")
      : item === "3"
      ? showRightAnswer.push("③")
      : item === "4"
      ? showRightAnswer.push("④")
      : showRightAnswer.push("⑤");
  });

  const handleRightAnswer = (index, value) => {
    let tmpAnswers = [...rightAnswer];
    tmpAnswers[index] = value;
    setRightAnswer(tmpAnswers);
  };

  const ansEnter = () => {
    setIsAnsEntered(true);
  };

  const reviseAnswer = () => {
    setIsAnsEntered(false);
    setTotalScore(51);
    setWrong([]);
  };

  const clearAnswer = () => {
    setIsAnsEntered(false);
    setTotalScore(51);
    setWrong([]);
    setRightAnswer([]);
  };

  const scoring = () => {
    answer = answer1 + answer2;

    if (answer.length !== 10) {
      alert("답 개수가 " + answer.length + "개입니다. 다시 입력해주세요.");
    } else {
      for (let i = 0; i < rightAnswer.length; i++) {
        if (answer.split("")[i] === rightAnswer[i]) {
          score += 1;
        } else {
          wrongProblems.push(String(i + 1) + " ");
          slash += 1;
        }
        if (i % 5 === 4 && i < 9 && slash !== 0) {
          wrongProblems.push("/ ");
          slash = 0;
        }
      }

      if (wrongProblems.length === 0) {
        wrongProblems.push("없음");
      }
      setTotalScore(score);
      setWrong(wrongProblems);
    }
  };

  const settingByKey = (e) => {
    if (e.key === "Enter") {
      ansEnter();
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
    setTotalScore(51);
    setWrong([]);
    firstRef.current.focus();
  };

  return (
    <>
      <h1>2027 통합과학 채점</h1>
      <p>
        ※ 참고 : 개발자가 근무하지 않으므로, 직접 입력 가능한 버전으로
        개발해두었습니다!
      </p>
      {isAnsEntered ? (
        <>
          <p>
            입력한 답안이 맞는지 확인하고, 수정이 필요한 경우 '수정', '초기화'
            버튼을 이용해 수정해주세요!
          </p>
        </>
      ) : (
        <>
          <p className="manual">정답을 직접 입력해주세요!</p>
        </>
      )}
      <table className="self-test-table">
        <thead>
          <tr>
            {[...Array(Math.ceil(2))].map((_, groupIndex) => (
              <>
                <td className="self-test-item">
                  <h4>문항</h4>
                </td>
                <td className="self-test-item">
                  <h4>정답</h4>
                </td>
                <td className="space-item"> </td>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(Math.ceil(2))].map((_, groupIndex) => {
                const realIndex = groupIndex * 5 + rowIndex;
                return isAnsEntered ? (
                  <>
                    <td className="self-test-item">{realIndex + 1}</td>
                    <td className="self-test-item answer-item">
                      {showRightAnswer[realIndex]}
                    </td>
                    <td> </td>
                  </>
                ) : (
                  <>
                    <td className="self-test-item">{realIndex + 1}</td>
                    <td className="self-test-item answer-item">
                      <input
                        className="right-answer-input"
                        value={rightAnswer[realIndex]}
                        onChange={(e) =>
                          handleRightAnswer(realIndex, e.target.value)
                        }
                        ref={(el) => {
                          rightAnswerRef.current[realIndex] = el;
                        }}
                        onKeyDown={settingByKey}
                        maxLength={1}
                      ></input>
                    </td>

                    <td> </td>
                  </>
                );
              })}
            </tr> // 이거 gpt가 만들어준 거라 난 잘 모름ㅋㅋ(2025-05-10 내역 찾아보셈)
          ))}
        </tbody>
      </table>

      {isAnsEntered ? (
        <>
          <button onClick={reviseAnswer} className="scoringButton">
            수정
          </button>
          <button onClick={clearAnswer} className="clearButton">
            초기화
          </button>

          <p>
            답이 모두 맞다면 학생이 기재한 답을 <strong>"숫자"</strong>만 입력해
            주세요! (ex 5243...)
          </p>

          <p className="warning">
            ※ 단, 마킹하지 않거나 복수 정답 기재 등으로 오답 처리할 문제는
            답으로 0을 입력해 주세요!
          </p>
        </>
      ) : (
        <>
          <button onClick={ansEnter} className="scoringButton">
            입력(Enter)
          </button>
        </>
      )}

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
      <h2>총점 : {totalScore === 51 ? "-" : totalScore}점</h2>
      <h2>
        틀린 문제 :{" "}
        {wrong.map((i) => (
          <span>{i}</span>
        ))}
      </h2>

      <p className="uxHelp">※ UX 설계 도움 : 안유주</p>
    </>
  );
}

/*
<button onClick={() => alert("개발 중입니다!")} className="scoringButton">
        상세 보기
      </button>

      <ansEnter> 자리에 들어갈 조건문
      : isScoreValid(questionScore) === false
      ? alert("배점에는 2점/3점만 입력 가능합니다! 다시 입력해주세요!")
*/
