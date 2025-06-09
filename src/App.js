import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👻</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>👽</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "test" });

  function handlePrevious() {
    // Handle previous step logic
    if (step > 1) setStep((currentValue) => currentValue - 1);
  }

  function handleNext() {
    // Handle next step logic
    if (step < 3) {
      setStep((currentValue) => currentValue + 1);
      // setStep((s) => s + 1);
    }

    // BAD PRACTICE: Mutating state directly
    // test.name = "test2";
    // setTest({ name: "test2" });
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {/* // Assignment: Make this dynamic */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* Display the current step message */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#e7e7e7"
              textColor="#333"
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Learn How
            </Button>
          </div>
          {/* Display the buttons */}
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text={<span>Next 👉</span>}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable StepMessage component
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// Reusable Button component
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* Children prop */}
      {children}
    </button>
  );
}
