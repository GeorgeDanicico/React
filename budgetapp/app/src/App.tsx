import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom';
import Login from './components/Login/Login';
import ViewBudgets from './screen/ViewBudgets';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ViewBudgets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;