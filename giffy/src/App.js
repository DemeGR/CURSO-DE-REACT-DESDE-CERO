import React,{useEffect,useState} from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=sOwBV2wN7m3pdBD9wDe5cJY5AMHVEVA8&q=pandas&limit=25&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])


  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
    console.log('actualizando los gifs')
    fetch(apiURL)
      .then(res => res.json())//de la respuesta convertirla como ojson
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
      
  },[]/*dependencias */)//se ejecuta solo una vez porque no tiene dependencias
  
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => <img src={singleGif}/> )
      } 
      </section>
    </div>
  );
}

export default App;
