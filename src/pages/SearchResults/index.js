import React from 'react';
import Spinner  from 'componentes/Spinner';
import ListOfGifs from 'componentes/ListOfGifs';
import { useGifs } from 'hooks/useGifs';

export default function SearchResults({params}){

    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({
        keyword})//se inicia el estado en falso
    
    const handleNextPage = () => setPage(prevPage => prevPage + 1)

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
        <br/>
        <button onClick = {handleNextPage}>Get next page</button>
    </>
}