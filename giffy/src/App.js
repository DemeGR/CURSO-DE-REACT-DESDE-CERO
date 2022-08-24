import React,{useEffect,useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

<<<<<<< HEAD

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
   getGifs({keyword:'rick'}).then(gifs => setGifs(gifs))
=======
const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=sOwBV2wN7m3pdBD9wDe5cJY5AMHVEVA8&q=pandas&limit=25&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])


  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
    console.log('actualizando los gifs')
    fetch(apiURL)
      .then(res => res.json())//de la respuesta convertirla como ojson
      .then(response => {
        const {data/*es un array */=[]} = response
        if(Array.isArray(data))  {  
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      }
      })
      
>>>>>>> 172750f45dbf96a36982de27cd11aff894c95bc5
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
