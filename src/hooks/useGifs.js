import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../Context/GifsContext'

const INITIAL_PAGE = 0

export  function useGifs({keyword}={keyword:null}){  
    const [loading, setLoading] = useState(false)//se inicia el estado en falso
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)//se inicializa un arreglo de gifs

    console.log(keyword)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')|| 'random'
    const [loadingNextPage, setLoadingNextPage] = useState(false)

    useEffect(function(){//se ejecuta cada vez que 
        //el componente se renderiza y cambian las
        // dependencias que le indicamos en el arreglo "[keyword]"
        setLoading(true)
        //recuperamos la keyword del localStorage
        
       
        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)//actualiza el estado
                setLoading(false)
                //guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword,keywordToUse, setGifs])

    useEffect(function(){
       if(page === INITIAL_PAGE ) return

       setLoadingNextPage(true)

       getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
        })
       
    },[keywordToUse,page,setGifs])

    return {loading, loadingNextPage,gifs, setPage}
}