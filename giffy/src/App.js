import React,{useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './componentes/Gif';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
   getGifs({keyword:'programming'}).then(gifs => setGifs(gifs))
  },[]/*dependencias */)//se ejecuta solo una vez porque no tiene dependencias
  
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => 
          <Gif title={singleGif.title} url={singleGif.url} id={singleGif.id}/>
        )
      } 
      </section>
    </div>
  );
}

export default App;
