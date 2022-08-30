import React from 'react';
import Spinner  from 'componentes/Spinner';
import ListOfGifs from 'componentes/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

export default function SearchResults({params}){

    const {keyword} = params
    const {loading, gifs} = useGifs({
        keyword})//se inicia el estado en falso
   
    return <>
        {loading// si carga ,se muestra el spinner. 
        //Si no se muestda lalista de  gifs
            ? <Spinner/>
            :<> 
                <h3 className="App-title">{decodeURI}
                {(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
            </>
        }
    </>
}