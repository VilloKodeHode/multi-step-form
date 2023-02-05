import { useState, useEffect } from "react";
import "./App.css";
import PageOne, {
  PageFive,
  PageFour,
  PageThree,
  PageTwo,
} from "./components/Pages";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PageIs, {
  SliderChoice,
  AddOnChoice,
  PlanChoice,
} from "./components/ContentChanger";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState("one");
  const [toggle, setToggle] = useState(true);
  const [addon, setAddon] = useState(false, false, false);
  const [plan, setPlan] = useState({
    Arcade: false,
    Advanced: false,
    Pro: false,
  });

  useEffect(() => {
    console.log(`Monthly or yearly?: ${toggle ? "Monthly" : "Yearly"}`);
    console.log(`Addon choices: ${JSON.stringify(addon)}`);
  }, [addon, toggle]);

  useEffect(() => {
    console.log(`Current Plan: ${JSON.stringify(plan)}`);
  }, [plan]);

  useEffect(() => {
    console.log(`On page ${page}`);
  }, [page]);

  useEffect(() => {
    localStorage.setItem("addon", JSON.stringify(addon));
    localStorage.setItem("toggle", JSON.stringify(toggle));
    localStorage.setItem("plan", JSON.stringify(plan));
  }, [addon, toggle, plan]);

  useEffect(() => {
    const storedAddon = localStorage.getItem("addon");
    const storedToggle = localStorage.getItem("toggle");
    const storedPlan = localStorage.getItem("plan");
    if (storedAddon) setAddon(JSON.parse(storedAddon));
    if (storedToggle) setToggle(JSON.parse(storedToggle));
    if (storedPlan) setPlan(JSON.parse(storedPlan));
  }, []);

  return (
    <PageIs.Provider value={{ page, setPage }}>
      <PlanChoice.Provider value={{ plan, setPlan }}>
        <SliderChoice.Provider value={{ toggle, setToggle }}>
          <AddOnChoice.Provider value={{ addon, setAddon }}>
            <div className="font-Ubuntu">
              {/* <Router>
                <Routes>
                  <Route path="/" element={<PageOne />} />
                  <Route path="/steptwo" element={<PageTwo />} />
                  <Route path="/stepthree" element={<PageThree />} />
                  <Route path="/stepfour" element={<PageFour />} />
                  <Route path="/finished" element={<PageFive />} />
                </Routes>
              </Router> */}
              <Layout />
            </div>
          </AddOnChoice.Provider>
        </SliderChoice.Provider>
      </PlanChoice.Provider>
    </PageIs.Provider>
  );
}

export default App;
