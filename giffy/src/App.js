import React from 'react';
import './App.css';
import ListOfGifs from './componentes/ListOfGifs';


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        {
          <ListOfGifs keyword='japan' />//se hace llama a la API
        } 
      </section>
    </div>
  );
}

//export default App;
