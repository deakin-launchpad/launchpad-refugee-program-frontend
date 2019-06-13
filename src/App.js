/**
 *  Created by Nirav Bhimani
 **/

import React, { useEffect } from 'react';
import './App.scss';
import { AppRoutes } from './routes/routes';

// Context import
import { LoginProvider } from './context/loginContext';

function App() {
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);

  return (
    <LoginProvider>
      <AppRoutes />
    </LoginProvider>
  );
}

export default App;
