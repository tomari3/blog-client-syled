import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/settings/Theme";
import { Global } from "./styles/settings/Global";

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
