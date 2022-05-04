import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import { lightTheme, darkTheme } from "./settings/Theme";
import { ThemeProvider } from "styled-components";
import Global from "./settings/Global";

import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <Global />
        <HashRouter basename="/">
          <AnimatedRoutes toggle={toggleTheme} />
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
