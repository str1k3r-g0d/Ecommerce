import React from 'react';
import Homepage from './pages/homepage/homepage.pages'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.pages.jsx'
import Header from './components/header.component/header.component';

import './App.css';


function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component ={ Homepage }/>
        <Route path='/shop' component ={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
