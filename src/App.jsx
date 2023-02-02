import { useState } from "react";
import "./App.css";
import PageOne, { PageTwo } from "./components/Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageIs from "./components/ContentChanger";

function App() {
  const [page, setPage] = useState("one");
  return (
    <PageIs.Provider value={{ page, setPage }}>
      <div className="font-Ubuntu">
        <Router>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/steptwo" element={<PageTwo />} />
          </Routes>
        </Router>
      </div>
    </PageIs.Provider>
  );
}

export default App;
