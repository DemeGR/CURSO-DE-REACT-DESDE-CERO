import React, { useState } from "react"
import { Link } from "wouter"

const POPULAR_GIFS = [" Matrix", " Chile"," Colombia"," Ecuador"," Mexico"]

export default function Home(){
    const [keyword, setkeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()//para evitar que aga su comportamiketnoo por defecto
        //naegar a otra ruta
        console.log(keyword)
    }

    const handleChange = evt =>{
        setkeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange = {handleChange} type='text' value ={keyword} />    
            </form>        
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif)=>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de 
                        { popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}