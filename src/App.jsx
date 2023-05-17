import { useState, useEffect } from "react";
import "./App.css";
import PageIs, {
  SliderChoice,
  AddOnChoice,
  PlanChoice,
  PersonalInfo,
} from "./components/ContentChanger";
import Layout from "./components/Layout";

function App() {
  const [page, setPage] = useState("one");
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [toggle, setToggle] = useState(true);
  const [addon, setAddon] = useState(false, false, false);
  const [plan, setPlan] = useState({
    Arcade: false,
    Advanced: false,
    Pro: false,
  });

  useEffect(() => {
    console.log(`Name: ${JSON.stringify(personalInfo.name)}`);
    console.log(`Email: ${JSON.stringify(personalInfo.email)}`);
    console.log(`Phone: ${JSON.stringify(personalInfo.phone)}`);
  }, [personalInfo]);

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
            <PersonalInfo.Provider value={{ personalInfo, setPersonalInfo }}>
              <div className="font-Ubuntu [&>*]:animate-FormPopUp">
                <Layout />
              </div>
            </PersonalInfo.Provider>
          </AddOnChoice.Provider>
        </SliderChoice.Provider>
      </PlanChoice.Provider>
    </PageIs.Provider>
  );
}

export default App;
