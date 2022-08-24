import React,{useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
   getGifs({keyword:'rick'}).then(gifs => setGifs(gifs))
  },[]/*dependencias */)//se ejecuta solo una vez porque no tiene dependencias
  
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => {
          return <div>
            <h4>{singleGif.title}</h4>
             <small>{singleGif.id}</small>
             <img alt={singleGif.title} src={singleGif.url}/> 
          </div>
        })
      } 
      </section>
    </div>
  );
}

export default App;
