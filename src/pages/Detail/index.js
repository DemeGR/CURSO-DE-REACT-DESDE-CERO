import React from 'react'
import Gif from 'componentes/Gif'
import useSingleGif from 'hooks/useSingleGif'

export default function Detail({params}){
    const {gif} = useSingleGif({id: params.id})
   
    if(!gif) return null

    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
    
}