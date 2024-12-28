import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./component/MainPage";
import ConceptTestScoring from "./component/ConceptTestScoring";
import FullTestScoring from "./component/FullTestScoring";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/concept-test" element={<ConceptTestScoring />} />
          <Route path="/full-test" element={<FullTestScoring />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
