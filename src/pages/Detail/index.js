import React from 'react'
import {Redirect} from 'wouter'
import Gif from 'componentes/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'componentes/Spinner'
import useSEO from 'hooks/useSEO'

export default function Detail({params}){
    const {gif,isLoading,isError} = useSingleGif({id: params.id})
    const title = gif?gif.title:'' //se recupera el nombre del gif
    useSEO({description:`Detail of ${title}`,title})//titulo que se muestra en la pestaña

    if(isLoading) return <Spinner/>
    if(isError) return <Redirect to= '404'/>//si hay un error lo direccionas al 404
    if(!gif) return null

    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
    
}