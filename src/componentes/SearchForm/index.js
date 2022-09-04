import React, {useState} from "react"
import {useLocation } from "wouter"

const RATINGS = ['g','pg','pg-13','r'];

export default function SearchForm({initialkeyword='',initialRating='g'})/*Funcion que se ejecutara cuando se haga submit con el boton o enter*/ {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialkeyword));
    const [rating, setRating] = useState(initialkeyword);
    const [times,setTimes] = useState(0)
    const [, pushLocation] = useLocation();
  
    const handleSubmit = (evt) => {
        evt.preventDefault()//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}/${rating}`);
        
    }
   ////se atualian los datos de forma imperativa. No es muy valido.
    const updateKeyword = (keyword) =>{
        setKeyword(keyword)
        setTimes(times + 1)
    }


    const handleChange = (evt) =>{
        updateKeyword(evt.target.value)
        setTimes(times + 1)
    }
 ////
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
                <small >{times}</small>
        </form>    
    )
}

//export default React.memo(SearchForm)