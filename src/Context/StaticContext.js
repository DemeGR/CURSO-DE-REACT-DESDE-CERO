import React from "react";

const Context = React.createContext({//objeto magico como valor inicial
    name:'esto-es-provider',//valor
    suscribeteAlCanal: true //inicial de context
})

export default Context