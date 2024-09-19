import { useEffect, useState } from "react";

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
      <input
        type="checkbox"
        onChange={handleChange}
        checked={theme === "dark"}
      />
    </div>
  );
};

export default Switch;
