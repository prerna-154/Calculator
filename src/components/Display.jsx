import styles from "./Display.module.css";
import { useEffect, useRef } from "react";

const Display = ({ displayValue }) => {
  
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll to the end of the input whenever displayValue changes
    if (inputRef.current) {
      inputRef.current.scrollLeft = inputRef.current.scrollWidth;
    }
  }, [displayValue]);


  return (
    <input
      ref={inputRef}
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
