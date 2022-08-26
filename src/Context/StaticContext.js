import React from "react";

const Context = React.createContext({//objeto magico como valor inicial
    name:'midudev',
    suscribeteAlCanal: true //valor que tiene desde cualquier sitio
})

export default Context