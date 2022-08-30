import {useEffect, useState, useRef} from 'react'

export default function useNearScreen({distance = '100px'}={}){
    //si el elemento que le hemos pasaso por parametro esta cerca
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function(){
        let observer

        const onChange = (entries,observer) =>{
            const el = entries[0]
            console.log(el.isIntersecting/*observa cualquier cambio */)
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }
        }

        //polyfill es una biliteca que ofrece 
        //una funcionalidad que le falta al navegador
    
        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() =>{
            observer = new IntersectionObserver(onChange, {rootMargin: distance
        
           })
           observer.observe(fromRef.current/*para hacerder al valor de Ref */)
         })        
        return () =>observer && observer.disconnect()
    })
    
    return {isNearScreen,fromRef}
}
