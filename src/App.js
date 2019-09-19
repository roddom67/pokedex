import React from 'react';
import './App.css';
import { Buscador } from './Components/Buscador/';


function App() {
  return (
    <div className="App">
      <div className="container">
      	<h1>PokéDex</h1>
      	<Buscador />
      </div>
    </div>
  );
}

export default App;
