import React, {useState } from "react"
import {useLocation } from "wouter"
import ListOfGifs from '../../componentes/ListOfGifs'
import { useGifs } from "../../hooks/useGifs"
import TrendingSearches from "../../componentes/TrendingSearches"

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange = {handleChange} type='text' value ={keyword} />  
                <button>Buscar</button>
            </form>    
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

