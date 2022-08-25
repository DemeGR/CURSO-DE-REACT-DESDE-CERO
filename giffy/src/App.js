import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './componentes/ListOfGifs';

import {Link,Route/*Para saber que rusta tinen nuestrs api */ } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section 
      className="App-content">
       <h1>App</h1>
       <Link to='/gif/panda'>Gifs de 
       pandas</Link>
       <Link to='/gif/Ecuador'>Gifs de 
       Ecuador</Link>
       <Link to='/gif/Chile'>Gifs de 
       Chile</Link>
       <Link to='/gif/Mexico'>Gifs de 
       Mexico</Link>
       <Route
          component = {ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  );
}

//export default App;
