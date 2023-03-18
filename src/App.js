import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AllCharactersDisplay from './Components/AllCharactersDisplay';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path = '/'
            element={<HomePage/>}
          />
          <Route 
            path = "/AllCharacters"
            element={<AllCharactersDisplay/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
