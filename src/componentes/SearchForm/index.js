import React, {useState} from "react"
import {useLocation } from "wouter"

export default function SearchForm({onSubmit})/*Funcion que se ejecutara cuando se haga submit con el boton o enter*/ {
    const [keyword, setKeyword] = useState('')

    const [path, pushLocation] = useLocation()
  
    const handleSubmit = evt => {
        evt.preventDefault()//para evitar que aga su comportamiketnoo por defecto
        //navegar a otra ruta
        pushLocation(  `/search/${keyword}`)
        
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(//
        <form onSubmit={handleSubmit}>
                 <button>Buscar</button>
                <input placeholder="Search a gif here..." onChange = {handleChange} type='text' value ={keyword} />  
        </form>    
    )
}

//export default React.memo(SearchForm)