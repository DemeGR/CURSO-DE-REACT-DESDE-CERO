import React,{Suspense} from 'react'
import {Link,Route,Switch} from 'wouter'

import Header from 'componentes/Header'

import Login from 'pages/Login'
import SearchResults from 'pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './Context/StaticContext'
import {UserContextProvider} from './Context/UserContext'

import { GifsContextProvider } from './Context/GifsContext'

import './App.css'

const HomePage = React.lazy(() => import('./pages/Home')
)

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Header/>
        <Link to="/"> 
          <figure className="App-logo">
              <img alt='Giffy logo' src='logo'/*{logo} para agregar una imagen */ />
             
            </figure>
        </Link>
        <GifsContextProvider>
          <Switch>
                <Route
                    component={HomePage}
                    path="/"
                />
                <Route
                    component={SearchResults}
                    path="/search/:keyword/:rating?" />
                <Route
                    component={Detail}
                    path="/gif/:id"
                  />
                <Route
                    component={Login}
                    path="/login"
                  />  
                
          </Switch>
          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}

//export default App;
