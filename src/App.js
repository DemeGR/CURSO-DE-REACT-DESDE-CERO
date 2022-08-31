import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './Context/StaticContext'
//import logo from 'logo.jpg' 

import {Link,Route} from 'wouter'
import { GifsContextProvider } from './Context/GifsContext'

export default function App() {
  return (
    <StaticContext.Provider 
      value={{name:'midudev',
      suscribeteAlCanal: true }}
    >
      <div className="App">
        <section className="App-content">
        <Link to="/"> 

          <figure className="App-logo">
              <img alt='Giffy logo' src='logo'/*{logo} para agregar una imagen */ />
             
            </figure>
        </Link>
        <GifsContextProvider>
          <Route
              component={Home}
              path="/"
          />
          <Route
              component={SearchResults}
              path="/search/:keyword" />
          <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

//export default App;
