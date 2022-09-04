import React, {useState,useReducer} from "react"
import {useLocation } from "wouter"

const RATINGS = ['g','pg','pg-13','r'];

const reducer=(state,param) => {
    return {
        ...state,
        keyword:param,
        times:state.times +1
    }
}

export default function SearchForm({initialKeyword='',initialRating='g'})/*Funcion que se ejecutara cuando se haga submit con el boton o enter*/ {
    //const [keyword, setKeyword] = useState(decodeURIComponent(initialkeyword));
   const [rating, setRating] = useState(initialRating);
    //const [times,setTimes] = useState(0)

    const [state,dispatch] = useReducer(reducer,{keyword:decodeURIComponent(initialKeyword),times: 0
    })

    const {keyword,times}=state

    const [, pushLocation] = useLocation();
  
    const handleSubmit = (evt) => {
        evt.preventDefault();//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}/${rating}`);
    };
  
    const updateKeyword = (keyword) =>{
        dispatch(keyword)
    }


    const handleChange = (evt) =>{
        updateKeyword(evt.target.value)
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
                <small >{times}</small>
        </form>    
    )
}

//export default React.memo(SearchForm)