import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './componentes/ListOfGifs';

import {Route/*Para saber que rusta tinen nuestrs api */ } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section 
      className="App-content">
       <h1>App</h1>
       <a href='/gif/panda'>Gifs de 
       pandas</a>
       <a href='/gif/Ecuador'>Gifs de 
       Ecuador</a>
       <a href='/gif/Chile'>Gifs de 
       Chile</a>
       <a href='/gif/Mexico'>Gifs de 
       Mexico</a>
       <Route
          component = {ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}

//export default App;
