import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ConceptTestScoring.css";

const answers = [
  "12",
  "12345",
  "3",
  "1345",
  "1235",
  "12345",
  "234",
  "13",
  "14",
  "23",
]; // 정답 수정
const pointsPerChoice = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // 점수 수정

function analyzeAnswer(studentAnswer, correctAnswer) {
  let wrongChoices = [];
  if (studentAnswer.length === 0) {
    wrongChoices.push("미입력");
  } else {
    for (let choice of "12345") {
      if (
        (correctAnswer.includes(choice) && !studentAnswer.includes(choice)) ||
        (!correctAnswer.includes(choice) && studentAnswer.includes(choice))
      ) {
        wrongChoices.push(choice);
      }
    }
  }
  return wrongChoices;
}

function calculateScore(studentAnswer, correctAnswer, pointPerChoice) {
  let score = 0;
  for (let choice of "12345") {
    if (studentAnswer.length === 0) {
      score += 0;
    } else if (
      (correctAnswer.includes(choice) && studentAnswer.includes(choice)) ||
      (!correctAnswer.includes(choice) && !studentAnswer.includes(choice))
    ) {
      score += pointPerChoice;
    }
  }
  return score;
}

export default function GradingApp() {
  const nav = useNavigate();
  const [responses, setResponses] = useState(Array(answers.length).fill(""));
  const [score, setScore] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const firstRef = useRef("");

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const scoring = () => {
    let totalScore = 0;
    let wrongList = [];

    responses.forEach((response, index) => {
      const problemScore = calculateScore(
        response,
        answers[index],
        pointsPerChoice[index]
      );
      totalScore += problemScore;

      const wrongChoices = analyzeAnswer(response, answers[index]);
      if (wrongChoices.length > 0) {
        wrongList.push(`${wrongChoices.join(", ")}`);
      } else {
        wrongList.push(`정답`);
      }
    });

    setScore(totalScore);
    setWrongAnswers(wrongList);
    console.log(wrongAnswers);
    wrongAnswers.map((item, index) =>
      console.log(
        index + 1,
        item.split(", ").map((i) => console.log(i))
      )
    );
  };

  const clear = () => {
    setResponses(Array(answers.length).fill(""));
    setScore(null);
    setWrongAnswers([]);
    firstRef.current.focus();
  };

  const scoringByKey = (e) => {
    if (e.key === "Enter") {
      scoring();
    } else if (e.key === "Escape") {
      clear();
    }
  };

  return (
    <>
      <h1>2027 개념반 6주차 채점</h1>
      <p>
        1/24 : 2027 개념반 <strong>6주차</strong> 업데이트
        완료되었습니다(개발자가 직접 정답 업데이트 중)!
      </p>
      <p className="manual">
        학생이 기재한 답을 <strong>"숫자"</strong>만 입력해 주세요! (ex. 134,
        235 ...)
      </p>
      <p className="warning">
        ※ 단, 마킹하지 않은 문제 or 한 줄로 밀어서 오답 처리할 문제는 빈칸으로
        두세요!
      </p>
      <div>
        <div className="container">
          <div>
            {responses.map((response, index) => (
              <div key={index} className="answer-container">
                <label className="block font-medium">
                  문제 {index + 1} (선택지당 {pointsPerChoice[index]}점)
                </label>
                <input
                  type="text"
                  value={response}
                  ref={index === 0 ? firstRef : null}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={scoringByKey}
                  className="answerInput"
                  placeholder="답 입력"
                />
              </div>
            ))}
          </div>
          <table className="answer-table">
            <thead>
              <tr>
                <th colspan="6">틀린 선택지</th>
              </tr>
            </thead>
            <tbody>
              {wrongAnswers.map((item, index) => {
                let items = item.split(", ");
                console.log(items);
                return (
                  <tr>
                    <td className="question-cell">
                      <strong>{index + 1}</strong>
                    </td>
                    <td
                      className={
                        items.includes("1") || items.includes("미입력")
                          ? "answer-cell wrong"
                          : "answer-cell"
                      }
                    >
                      ①
                    </td>
                    <td
                      className={
                        items.includes("2") || items.includes("미입력")
                          ? "answer-cell wrong"
                          : "answer-cell"
                      }
                    >
                      ②
                    </td>
                    <td
                      className={
                        items.includes("3") || items.includes("미입력")
                          ? "answer-cell wrong"
                          : "answer-cell"
                      }
                    >
                      ③
                    </td>
                    <td
                      className={
                        items.includes("4") || items.includes("미입력")
                          ? "answer-cell wrong"
                          : "answer-cell"
                      }
                    >
                      ④
                    </td>
                    <td
                      className={
                        items.includes("5") || items.includes("미입력")
                          ? "answer-cell wrong"
                          : "answer-cell"
                      }
                    >
                      ⑤
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

        {score !== null && (
          <h2 className="text-lg font-bold">총 점수: {score}점</h2>
        )}
      </div>
    </>
  );
}

/*

*/
