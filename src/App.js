import { React, useState } from "react";
import FirstPhaseSystem from "./ConceptTestScoring";
import InputAllSystem from "./FullTestScoring";
import "./App.css";

function App() {
  const [firstPhase, setFirstPhase] = useState(true);

  return (
    <div className="App">
      {firstPhase ? (
        <>
          <h1>2026 수능 대비 윤도영 1단계 개념반 1주차 TEST 채점(Beta)</h1>
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
          <FirstPhaseSystem />
          <div>
            <button
              onClick={() => setFirstPhase(false)}
              className="modeChangeButton"
            >
              2/3단계 ver. 채점
            </button>
          </div>
        </>
      ) : (
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
          <p className="warning">
            ※ 단, 마킹하지 않은 문제는 0을 입력해 주세요!
          </p>
          <InputAllSystem />
          <div>
            <button
              onClick={() => setFirstPhase(true)}
              className="modeChangeButton"
            >
              1단계 ver. 채점
            </button>
          </div>

          <p className="uxHelp">※ UX 설계 도움 : 안유주</p>
        </>
      )}
    </div>
  );
}

export default App;
