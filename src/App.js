/**
 *  Created by Nirav Bhimani who isn't working anymore
 **/

import React, { useEffect, useContext } from 'react';
import './App.scss';
import { AppRoutes } from './routes/routes';

// Context import
import { LoginProvider } from './context/loginContext';
import {DeveloperModeProvider} from './context/developerModeContext'
import {DemoDataProvider} from './context/demodataContext'

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);

  return (
    <DeveloperModeProvider>
    <DemoDataProvider>
    <LoginProvider>
      <AppRoutes/>
    </LoginProvider>
    </DemoDataProvider>
    </DeveloperModeProvider>
  );
}

export default App;
