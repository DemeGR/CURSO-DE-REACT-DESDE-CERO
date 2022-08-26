import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

export  function useGifs({keyword}){  
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

    return {loading, gifs}
}