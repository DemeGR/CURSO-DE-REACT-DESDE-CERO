import React,{Suspense} from 'react'
import './App.css'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './Context/StaticContext'
//import logo from 'logo.jpg' 

import {Link,Route} from 'wouter'
import { GifsContextProvider } from './Context/GifsContext'

const HomePage = React.lazy(() => import('./pages/Home')
)

export default function App() {
  return (
    <StaticContext.Provider 
      value={{name:'midudev',
      suscribeteAlCanal: true }}
    >
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
        <Link to="/"> 

          <figure className="App-logo">
              <img alt='Giffy logo' src='logo'/*{logo} para agregar una imagen */ />
             
            </figure>
        </Link>
        <GifsContextProvider>
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
              component={() => <h1>404 ERROR :(</h1>}
              path="/404"
            />  

          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  )
}

//export default App;
