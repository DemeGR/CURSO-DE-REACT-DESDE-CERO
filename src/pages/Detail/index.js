import React from 'react'
import {Redirect} from 'wouter'
import Gif from 'componentes/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'componentes/Spinner'
import {Helmet} from  'react-helmet'

export default function Detail({params}){
    const {gif,isLoading,isError} = useSingleGif({id: params.id})
    const title = gif?gif.title:'' //se recupera el nombre del gif
    
    if(isLoading)  {
      return(
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <Spinner/>
        </>
      )
    }
   


    if(isError) return <Redirect to= '404'/>//si hay un error lo direccionas al 404
    if(!gif) return null

    return <>
      <Helmet>
      <title>{title} || Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
    
}