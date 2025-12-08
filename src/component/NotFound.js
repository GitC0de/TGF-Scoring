import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../System.css";
import "./MainPage.css";
export default function MainPage() {
  const nav = useNavigate();
  return (
    <>
      <div className="main-container">
        <h1>잘못된 접근</h1>
        <p>
          현재 페이지는 존재하지 않습니다! 윤도영 채점시스템을 이용하려면 아래의
          '메인 화면' 버튼을 클릭해주세요!
        </p>
        <button onClick={() => nav("/")} className="mainButton">
          메인 화면
        </button>
      </div>
    </>
  );
}
