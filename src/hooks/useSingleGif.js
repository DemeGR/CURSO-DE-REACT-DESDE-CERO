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
    
    
    useEffect(function(){
        if(!gif){
            getSingleGif({id/*objeto */}/*para que funciones  */)
                .then(setGif)
                
        }
    },[gif, id])

    return {gif}
}