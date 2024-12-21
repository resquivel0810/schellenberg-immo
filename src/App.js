import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage';
import Impressum from './Pages/Impressum';


function App() {



  return (
    <Router >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Datenschutz-Impressum' element={<Impressum/>} />
      </Routes>
    </Router>
  );
}

export default App;
