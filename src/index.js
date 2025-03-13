import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


// https://github.com/digitalinnovationone/trilha-react-desafio-3/blob/master/src/components/Header/index.jsx