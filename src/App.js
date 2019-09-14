import React from 'react';
import Homepage from './pages/homepage/homepage.pages'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.pages.jsx'
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component ={ Homepage }/>
        <Route path='/hats' component ={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
