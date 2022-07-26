import React from 'react';
import { AppProvider } from './context/AppContext'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

function App() {
  return (
    <AppProvider>
      <GlobalStyle /> 
      <Layout />
    </AppProvider>
  );
};

export default App;
