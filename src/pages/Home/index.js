import React, {useCallback } from "react"
import {useLocation } from "wouter"
import ListOfGifs from '../../componentes/ListOfGifs'
import { useGifs } from "../../hooks/useGifs"
import TrendingSearches from "../../componentes/TrendingSearches"
import SearchForm from "componentes/SearchForm"

export default function Home(){
  
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = /*guardar esta funcion  a no ser que cambien las dependencias*/useCallback(({keyword}) => {
       
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}`)
        /* */
    },[pushLocation/*cada ves que cambia, crea la funcion handleSubmit*/]/*dependencias */)

    return(
        <>
            <SearchForm onSubmit={handleSubmit} />
            <div className ="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                     <ListOfGifs gifs={gifs}/>    
                </div>
                <div className="App-category">
                    <TrendingSearches/>
                </div>
            </div>
        </>
    )
}

