import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      try {
        const result = eval(calVal);
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
    } else {
      const operators = ["+", "-", "*", "/"];
      if (
        operators.includes(buttonText) &&
        operators.includes(calVal[calVal.length - 1])
      ) {
        return;
      }
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
