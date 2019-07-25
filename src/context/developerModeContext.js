import React, { createContext, useState } from "react";

export const DeveloperModeContext = createContext();

export const DeveloperModeProvider = props => {
  const { children } = props;
  const [developerMODE, setDeveloperMode] = useState(false);

  return (
    <DeveloperModeContext.Provider value={{ developerMODE, setDeveloperMode }}>
      {children}
    </DeveloperModeContext.Provider>
  );
};
