import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../Context/GifsContext'

export  function useGifs({keyword}={keyword:null}){  
    const [loading, setLoading] = useState(false)//se inicia el estado en falso
    const {gifs, setGifs} = useContext(GifsContext)//se inicializa un arreglo de gifs

    console.log(keyword)

    useEffect(function(){//se ejecuta cada vez que 
        //el componente se renderiza y cambian las
        // dependencias que le indicamos en el arreglo "[keyword]"
        setLoading(true)
        //recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')|| 'random'
       
        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)//actualiza el estado
                setLoading(false)
                //guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])

    return {loading, gifs}
}