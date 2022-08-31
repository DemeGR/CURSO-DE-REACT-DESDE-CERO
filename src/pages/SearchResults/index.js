import React,{useEffect, useRef} from 'react';
import Spinner  from 'componentes/Spinner';
import ListOfGifs from 'componentes/ListOfGifs';
import { useGifs } from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it'

export default function SearchResults({params}){

    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({
        keyword})//se inicia el estado en falso
    const externalRef = useRef()    
    const {isNearScreen} = useNearScreen({externalRef: loading ? null: externalRef})
    //const handleNextPage = () => setPage(prevPage => prevPage + 1)
    
    const debounceHandleNextPage = useRef()
    console.log(isNearScreen)//ver si se esta detetando correctamente cuando ese elemento esta acerca de l apantalla

    const handleNextPage =() => console.log('next page')
    
     debounceHandleNextPage.current = () => debounce(/*Parametros: funcion y tiempo de espera en ms */
        () => console.log('next page'), 1000
    )

    useEffect(function(){
        if(isNearScreen) debounceHandleNextPage.current()
    })


    return <>
        {loading// si carga ,se muestra el spinner. 
        //Si no se muestda lalista de  gifs
            ? <Spinner/>
            :<> 
                <h3 className="App-title">{decodeURI}
                {(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}