import getGifs from '../services/getGifs';
import React,{useEffect,useState} from 'react';
import Gif from "./Gif";

export default function ListOfGifs({params}){
    const {keyword} = params

    const [gifs, setGifs] = useState([])//estado inicial. No tine inicializacion 

    useEffect(function (){//En l aprimera renderizacion se llama a keyword 
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
       },[keyword]/*dependencias */)// eslin-disable-line 

    return <div>
    {    gifs.map(({id, title,url}) =>
            <Gif
                id={id}
                key={id}
                title={title}
                url={url}
            />
        )
    }
    </div>
}