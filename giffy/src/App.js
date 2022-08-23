import React,{useEffect,useState} from 'react';
import './App.css';

const GIFS = ['https://media1.giphy.com/media/xThuWdQdTh6C0BaBc4/giphy.webp?cid=ecf05e47dfgyr65hdrygsrhi5zwtmpuaguew6nmdpamo4idn&rid=giphy.webp&ct=g','https://media3.giphy.com/media/10Semkr8IesDe0/giphy.webp?cid=ecf05e47qs733uu5z36trjlyurvn4v1zwvrwmddu1cpfuvs2&rid=giphy.webp&ct=g'
]

const DIREFFERENT_GITS = [
  'https://media3.giphy.com/media/l0MYOwS7JDddcyo3m/200w.webp?cid=ecf05e47ps0ezjez2osp2z6b7ncp04iw2eoq02fwv701rau8&rid=200w.webp&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function (){//solo con centrarce cambiara los gifs sin necesidad de un boton 
    console.log('actualizando los gifs')
    setGifs(DIREFFERENT_GITS)
  },[]/*dependencias */)//se ejecuta solo una vez porque no tiene dependencias
  
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => <img src={singleGif}/> )
      } 
      <button onClick={() => setGifs(DIREFFERENT_GITS)}> Cambiar gifs </button>
      </section>
    </div>
  );
}

export default App;
