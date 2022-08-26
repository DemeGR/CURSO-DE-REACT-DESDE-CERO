import React, {useEffect, useState} from "react";
import Spinner  from "../../componentes/Spinner";
import ListOfGifs from '../../componentes/ListOfGifs'
import getGifs from "../../services/getGifs";

export default function SearchResults({params}){
    const {keyword} = params
    const [loading, setLoading] = useState(false)//se inicia el estado en falso
    const [gifs, setGifs] = useState([])//se inicializa un arreglo de gifs

    useEffect(function(){//se ejecuta cada vez que 
        //el componente se renderiza y cambian las
        // dependencias que le indicamos en el arreglo "[keyword]"
        setLoading(true)
        getGifs({keyword})
            .then(gifs => {
                setGifs(gifs)//actualiza el estado
                setLoading(false)
            })
    }, [keyword])

    return <>
        {loading// si carga ,se muestra el spinner. 
        //Si no se muestda lalista de  gifs
            ? <Spinner/>
            : <ListOfGifs gifs={gifs} />
        }
    </>
}