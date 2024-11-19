import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Resume from './components/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route exact path='/resume' element={<Resume />} />
    </Routes>
  </Router>
);