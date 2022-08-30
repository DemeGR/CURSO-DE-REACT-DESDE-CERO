import React, {useContext} from 'react'
import Gif from 'componentes/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'

export default function Detail({params}){
    const gifs = useGlobalGifs()
   

    const gif = gifs.find(singleGif =>
      singleGif.id = params.id  
    )

    console.log(gif)

    return <Gif {...gif} />
}