import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom';
import Login from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import ViewBudgets from './screen/ViewBudgets';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            <ViewBudgets />
          </RequireAuth>} />
      </Routes>
    </Router>
  )
}

export default App;