import Context from "Context/UserContext";
import { useCallback, useContext} from "react";

export default function useUser(){
    const {jwt,setJWT} = useContext(Context)

    const login = useCallback(() =>{
        setJWT('test')
    },[setJWT])

    console.log(jwt)

    return{
        isLogged: Boolean(jwt),
        login
    }
}