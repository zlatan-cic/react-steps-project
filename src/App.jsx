import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);

    }
  }
  function handleNext() {
    if (step < messages.length){
      setStep(step + 1);
    }
  }
  return (
    <>
      <div className="steps">
        <div className="container">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
            <div className={`${step >= 5 ? "active" : ""}`}>5</div>
            <div className={`${step >= 6 ? "active" : ""}`}>6</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button className="btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
