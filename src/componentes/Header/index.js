import React from 'react' 
import {Link} from 'wouter'
import './Header.css'
import useUser from 'hooks/useUser'

export default function Header(){
   // const isLogged = false
    const {isLogged} = useUser()

    return (
        <header className='gf-header'>
            {
                isLogged
                    ?<Link to='/logout'>
                    Logout
                    </Link>
                    :<Link to='/login'>
                     Login
                    </Link>
            }  
        </header>
    )
}