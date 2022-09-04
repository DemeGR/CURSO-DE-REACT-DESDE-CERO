import React, {useCallback } from "react"

import ListOfGifs from '../../componentes/ListOfGifs'
import { useGifs } from "../../hooks/useGifs"
import TrendingSearches from "../../componentes/TrendingSearches"
import SearchForm from "componentes/SearchForm"
import {Helmet} from 'react-helmet'

export default function Home(){
    const {loading, gifs} = useGifs()

    return(
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <render className="o-header">
                 <SearchForm  />
            </render>
            <div className ="App-arapper">
            <div className ="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                     <ListOfGifs gifs={gifs}/>    
                </div>
                <div className="App-category">
                    <TrendingSearches/>
                </div>
            </div>
            </div>
        </>
    )
}

