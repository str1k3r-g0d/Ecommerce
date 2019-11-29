import React from 'react';
import Homepage from './pages/homepage/homepage.pages'
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.pages.jsx'
import Header from './components/header.component/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up.pages/sign-in-and-sign-up.pages';
import { auth,  createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'; 

class App extends React.Component {

  

  unsubscribeFromAuth = null;
  
  componentDidMount() {

    const {setCurrentUser} = this.props;  

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {
         
            setCurrentUser({
              id: snapShot.id,
            ...snapShot.data()
            
          });
        });
      } 
        setCurrentUser(userAuth);
      


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  
  
  
  
  
  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component ={ Homepage }/>
          <Route path='/shop' component ={ ShopPage }/>
          <Route 
            exact 
            path = '/signin' 
            render = { () => this.props.currentUser ? ( <Redirect to='/' /> ) : (<SignInAndSignUpPage/>)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = ( {user} ) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
