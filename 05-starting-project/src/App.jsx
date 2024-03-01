import { useState } from "react";
import InvestmentInputGroup from "./components/InvestmentInputGroup";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    "INITIAL INVESTMENT": 10000,
    "ANNUAL INVESTMENT": 1200,
    "EXPECTED RETURN": 6,
    DURATION: 10,
  });

  const isInputValid = userInput["DURATION"] > 0;

  function handleChange(type, value) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [type]: +value,
      };
    });
  }
  return (
    <>
      <section id="user-input">
        <InvestmentInputGroup
          label1="INITIAL INVESTMENT"
          label2="ANNUAL INVESTMENT"
          userInput={userInput}
          onChange={handleChange}
        />
        <InvestmentInputGroup
          label1="EXPECTED RETURN"
          label2="DURATION"
          userInput={userInput}
          onChange={handleChange}
        />
      </section>
      {!isInputValid && (
        <p className="center">
          Please enter 'duration' value greater than zero.
        </p>
      )}
      {isInputValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
