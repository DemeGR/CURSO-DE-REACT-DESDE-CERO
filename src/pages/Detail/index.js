import React, {useContext} from 'react'
import StaticContext from '../../Context/StaticContext'

export default function Detail({params}){
    const context = useContext(StaticContext)
    console.log(context)
    return <h1>GIF con id {params.id}</h1>
}