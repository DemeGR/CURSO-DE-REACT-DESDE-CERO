import React, {useContext} from 'react'
import GifsContext from '../../Context/GifsContext'
import Gif from '../../componentes/Gif'
 
export default function Detail({params}){
    const {gifs} = useContext(GifsContext)
   

    const gif = gifs.find(singleGif =>
      singleGif.id = params.id  
    )

    console.log(gif)

    return <Gif {...gif} />
}