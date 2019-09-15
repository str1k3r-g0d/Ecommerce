import React from 'react';
import Homepage from './pages/homepage/homepage.pages'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.pages.jsx'
import Header from './components/header.component/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.pages/sign-in-and-sign-up.pages';


import './App.css';


function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component ={ Homepage }/>
        <Route path='/shop' component ={ ShopPage }/>
        <Route path = '/signin' component = { SignInAndSignUpPage }/>
      </Switch>
    </div>
  );
}

export default App;
