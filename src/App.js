import { React } from "react";
import System from "./System";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>The Great Final 11주차 채점(Beta)</h1>
      <p>학생이 기재한 답을 "숫자"만 입력해 주세요! (ex.52431...)</p>
      <p className="warning">※ 단, 마킹하지 않은 문제는 0을 입력해 주세요!</p>
      <System />
      <p>
        ※ 주차를 확인해주세요! 저번 주차로 되어 있다면, 업데이트가 되지 않은
        것입니다!
      </p>
    </div>
  );
}

export default App;
