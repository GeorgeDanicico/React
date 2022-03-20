import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BudgetsProvider } from './contexts/BudgetContexts';
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
