import React, {useReducer} from "react"
import {useLocation } from "wouter"

const RATINGS = ['g','pg','pg-13','r'];

const ACTIONS = {//Una mejor practica es evitar pasar manualmente un string
    //el string que se le asigna no importan, lo unico necesario es que sean diferentes
    UPDATE_KEYWORD:'update_keyword',
    UPDATE_RATING:'update_rating'
}

const ACTIONS_REDUCERS={
    [ACTIONS.UPDATE_KEYWORD]:(state,action) =>({
        ...state,
                keyword:action.payload,
                times:state.times +1
    }),
    [ACTIONS.UPDATE_RATING]:(state,action) =>({
        ...state,
        rating: action.payload
    })
}

const reducer=(state,action) => {
    const actionReducer = ACTIONS_REDUCERS[ACTIONS.type]
    return actionReducer ? actionReducer(state,action): state
}

export default function SearchForm({initialKeyword='',initialRating='g'})/*Funcion que se ejecutara cuando se haga submit con el boton o enter*/ {
    

    const [state,dispatch] = useReducer(reducer,{keyword:decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0
    })

    const {keyword,rating,times}=state

    const [, pushLocation] = useLocation();
  
    const handleSubmit = (evt) => {
        evt.preventDefault();//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}/${rating}`);
    };
  
    const handleChange = (evt) =>{
        dispatch({type: ACTIONS.UPDATE_KEYWORD,payload: evt.target.value})
    }
 
    const handleChangeRating = (evt) => (
        dispatch({type: ACTIONS.UPDATE_KEYWORD,payload: evt.target.value})
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