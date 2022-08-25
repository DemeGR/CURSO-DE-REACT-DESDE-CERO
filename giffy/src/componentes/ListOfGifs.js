import getGifs from '../services/getGifs';
import React,{useEffect,useState} from 'react';
import Gif from "./Gif";

export default function ListOfGifs({params}){
    const {keyword} = params

    const [gifs, setGifs] = useState(
        {loading:false, results:[]}
        )//estado inicial. No tine inicializacion 

    useEffect(function (){//En l aprimera renderizacion se llama a keyword 
        setGifs( actualGifs => ({loading: true, results: actualGifs.results})
        )
        getGifs({keyword})
        .then(gifs => {
            setGifs({loading: false, results: gifs})
        })
    },[keyword]/*dependencias */)

    if(gifs.loading) return <i>Cargando @</i>

    return <div>
    {    gifs.results.map(({id, title,url}) =>
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