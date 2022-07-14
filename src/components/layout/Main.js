import React, { useState } from "react";
import { Header } from "./Header";
import { Content } from "./Content";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      data-testid="application"
      className={darkMode ? "darkmode" : undefined}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content />
    </main>
  );
};

export default Main;
