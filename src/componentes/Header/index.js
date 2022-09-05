import React from 'react' 
import {Link} from 'wouter'
import './Header.css'

export default function Header(){
    const isLogged = false

    return (
        <header className='gf-header'>
            {
                isLogged
                    ?<Link to='/logout'>
                    logout
                    </Link>
                    :<Link to='/login'>
                Login
            </Link>
            }  
        </header>
    )
}