import { useEffect, useState } from "react";
import styles from "./Switch.module.css";

const Switch = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div>
      <label className={`${styles.switch}`}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
