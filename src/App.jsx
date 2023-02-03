import { useState } from "react";
import "./App.css";
import PageOne, { PageFour, PageThree, PageTwo } from "./components/Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageIs, { SliderChoice } from "./components/ContentChanger";

function App() {
  const [page, setPage] = useState("one");
  const [toggle, setToggle] = useState(true);
  return (
    <PageIs.Provider value={{ page, setPage }}>
      <SliderChoice.Provider value={{ toggle, setToggle }}>
        <div className="font-Ubuntu">
          <Router>
            <Routes>
              <Route path="/" element={<PageOne />} />
              <Route path="/steptwo" element={<PageTwo />} />
              <Route path="/stepthree" element={<PageThree />} />
              <Route path="/stepfour" element={<PageFour />} />
            </Routes>
          </Router>
        </div>
      </SliderChoice.Provider>
    </PageIs.Provider>
  );
}

export default App;
