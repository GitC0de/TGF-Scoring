import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./MainPage.css";
export default function MainPage() {
  const nav = useNavigate();
  return (
    <>
      <div className="main-container">
        <h1>채점 모드 선택</h1>
        <div className="test-select-container">
          <div className="test-container">
            <h2>1단계 채점</h2>
            <p className="test-type-ex">1단계 개념반 TEST 채점(현재 종강)</p>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </div>
            <button onClick={() => nav("/concept-test")} className="modeButton">
              1단계 ver. 채점
            </button>
          </div>
          <div className="test-container">
            <h2>2/3단계 채점</h2>
            <p className="test-type-ex">AS / TGF(매주 업데이트 예정)</p>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-fire"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
            </div>
            <button onClick={() => nav("/full-test")} className="modeButton">
              {/* <button onClick={() => nav("/full-test")} className="modeButton"> */}
              2/3단계 ver. 채점
            </button>
          </div>
          <div className="test-container">
            <h2>사용자 정의 채점(사용 불가)</h2>
            <p className="test-type-ex">
              직접 답안/배점을 입력하여 채점(개발 중)
            </p>
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-fire"
                viewBox="0 0 16 16"
              >
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
            </div>
            <button onClick={() => nav("/self-test")} className="modeButton">
              사용자 정의 채점
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/*

            
 */
