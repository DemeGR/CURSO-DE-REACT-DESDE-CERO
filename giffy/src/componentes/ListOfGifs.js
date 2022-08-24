import getGifs from '../services/getGifs';
import React,{useEffect,useState} from 'react';
import Gif from "./Gif";

export default function ListOfGifs({keyword}){
    const [gifs, setGifs] = useState([])//estado inicial. No tine inicializacion 

    useEffect(function (){//En l aprimera renderizacion se llama a keyword 
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
       },[]/*dependencias */)//se ejecuta solo 

    return gifs.map(({id, title,url}) =>
        <Gif
             id={id}
              key={id}
              title={title}
              url={url}
        />
    )
}