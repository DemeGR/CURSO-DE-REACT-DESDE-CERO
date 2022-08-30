import React, {useState,useEffect, useRef} from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from '../Category'

function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])

    return <Category name='Tendencias' options={trends}/>
}

export default function LazyTrending(){
    const [show, setShow] = useState(false)
    const elementRef = useRef()

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
            observer = new IntersectionObserver(onChange, {rootMargin: '100px'
        
           })
           observer.observe(elementRef.current/*para hacerder al valor de Ref */)
         })        
        return () =>observer && observer.disconnect()
    })
    
    return <div ref={elementRef}>
        {show ?  <TrendingSearches /> : null}
    </div>
}