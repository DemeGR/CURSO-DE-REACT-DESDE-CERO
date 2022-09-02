import React from 'react'

import Gif from 'componentes/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'componentes/Spinner'

export default function Detail({params}){
    const {gif,isLoading,isError} = useSingleGif({id: params.id})
   
    if(isLoading) return <Spinner/>
    
    if(!gif) return null

    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
    
}