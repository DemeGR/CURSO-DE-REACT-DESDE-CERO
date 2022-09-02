import {useState, useEffect} from 'react'
import {useGifs} from 'hooks/useGifs'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({id}){
    //recuperacion del gif
    const {gifs} = useGifs()
    const gitFromCache = gifs.find(singleGif =>
        singleGif.id ===id)
    
        //la unica forma de que cabie de estado es pasandole setGif
    const[gif, setGif] = useState(gitFromCache)
    const[isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    
    useEffect(function(){
        if(!gif){
            setIsLoading(true)
            getSingleGif({id/*objeto */}/*para que funciones  */)
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                }).catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                })
                
        }
    },[gif, id])

    return {gif, isLoading, isError}
}