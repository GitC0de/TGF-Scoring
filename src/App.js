import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./component/MainPage";
import ConceptTestScoring from "./component/ConceptTestScoring";
import FullTestScoring from "./component/FullTestScoring";
import FullTestSelfScoring from "./component/FullTestSelfScoring";
import IntegratedScienceFullScoring from "./component/tmpIntegratedScoring";
import SelfTestScoring from "./component/selfTestScoring";
import SelfTestLanguage from "./component/selfTestLanguage";
import SelfTestMath from "./component/selfTestMath";
import SelfTestExploration from "./component/selfTestExploration";
import NotFound from "./component/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/concept-test" element={<ConceptTestScoring />} />
          <Route path="/full-test" element={<FullTestSelfScoring />} />
          <Route
            path="/integrated-science-full-test"
            element={<IntegratedScienceFullScoring />}
          />
          <Route path="/self-test" element={<SelfTestScoring />} />
          <Route path="/self-test/language" element={<SelfTestLanguage />} />
          <Route path="/self-test/mathnotready" element={<SelfTestMath />} />
          <Route
            path="/self-test/exploration"
            element={<SelfTestExploration />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
