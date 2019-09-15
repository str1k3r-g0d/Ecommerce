import React from 'react';
import Homepage from './pages/homepage/homepage.pages'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.pages.jsx'
import Header from './components/header.component/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.pages/sign-in-and-sign-up.pages';
import { auth,  createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
        this.setState(
          {
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
            
          }
        )
        }) 
      } else {
        this.setState({currentUser: userAuth});
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  
  
  
  
  render() {
    return (
      <div>
      <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component ={ Homepage }/>
          <Route path='/shop' component ={ ShopPage }/>
          <Route path = '/signin' component = { SignInAndSignUpPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
