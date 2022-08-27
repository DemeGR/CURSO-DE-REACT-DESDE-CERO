import React, {useContext} from 'react'
import GifsContext from '../../Context/GifsContext'

export default function Detail({params}){
    const {gifs} = useContext(GifsContext)
    console.log({gifs})

    return <h1>GIF con id {params.id}</h1>
}