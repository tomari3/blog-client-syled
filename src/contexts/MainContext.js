import React, { useState } from "react";

const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState("");

  return (
    <MainContext.Provider value={{ jwt, setJwt }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider, MainContext };
