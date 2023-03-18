import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AllCharactersDisplay from './Components/AllCharactersDisplay';
import SingleCharacter from './Components/SingleCharacter';

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
          <Route 
            path='/SingleCharacter'
            element={<SingleCharacter/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
