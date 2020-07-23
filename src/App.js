import React, {Component} from 'react';
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PhoneContextProvider from './context/phoneContext'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import TotalContextProvider from './context/totalContext'

class App extends Component {

  render() {
      
  

    return (
      <div className="App">
      	<Router>
      	<Navbar />
      	<PhoneContextProvider>
        <TotalContextProvider>
        <Switch>
            <Route exact path="/" component={ProductList} />
      		  <Route path='/cart' component={Cart} />
        </Switch>
        </TotalContextProvider>
        </PhoneContextProvider>
      	</Router>
      </div>
    )
  }
}

export default App