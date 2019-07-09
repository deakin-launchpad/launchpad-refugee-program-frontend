/**
 *  Created by Nirav Bhimani
 **/

import React, { useEffect } from "react";
import "./App.scss";
import { AppRoutes } from "./routes/routes";

// Context import
import { LoginProvider } from "./context/loginContext";
import HomeContext from "./context/homeContext";
import { ProfileProvider } from "./context/profileContext";
import { NewsProvider } from "./context/newsContext";

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);

  return (
    <ProfileProvider>
      <LoginProvider>
        <HomeContext>
          <NewsProvider>
            <AppRoutes />
          </NewsProvider>
        </HomeContext>
      </LoginProvider>
    </ProfileProvider>
  );
}

export default App;
