/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from "react";

import Weather from './components/Weather';




const App = () => {
  useEffect(() => {
    fetch("https://service-12345.onrender.com")
      .then((res) => res.json())
  },[]);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;