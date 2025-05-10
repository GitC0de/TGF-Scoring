import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./component/MainPage";
import ConceptTestScoring from "./component/ConceptTestScoring";
import FullTestScoring from "./component/FullTestScoring";
import SelfTestScoring from "./component/selfTestScoring";
import SelfTestLanguage from "./component/selfTestLanguage";
import SelfTestMath from "./component/selfTestMath";
import SelfTestExploration from "./component/selfTestExploration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/concept-test" element={<ConceptTestScoring />} />
          <Route path="/full-test" element={<FullTestScoring />} />
          <Route path="/self-test" element={<SelfTestScoring />} />
          <Route path="/self-test/language" element={<SelfTestLanguage />} />
          <Route path="/self-test/mathnotready" element={<SelfTestMath />} />
          <Route
            path="/self-test/exploration"
            element={<SelfTestExploration />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
