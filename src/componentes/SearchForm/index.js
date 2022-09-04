import React, {useState} from "react"
import {useLocation } from "wouter"

const RATINGS = ['g','pg','pg-13','r'];

export default function SearchForm()/*Funcion que se ejecutara cuando se haga submit con el boton o enter*/ {
    const [keyword, setKeyword] = useState('')
    const [rating, setRating] = useState(RATINGS[0])

    const [, pushLocation] = useLocation()
  
    const handleSubmit = evt => {
        evt.preventDefault()//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}`)
        
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) => (
        setRating(evt.target.value)
    )

    return(//
        <form onSubmit={handleSubmit}>
                 <button>Buscar</button>
                <input placeholder="Search a gif here..." onChange = {handleChange} type='text' value ={keyword} />  
                <select onChange={handleChangeRating} value={rating}>
                    <option disabled>Rating type</option>
                    {RATINGS.map((rating) => (<option key={rating}>{rating}</option>))}
                </select>
        </form>    
    )
}

//export default React.memo(SearchForm)