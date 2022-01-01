import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Routes , Link} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/signin" element={<SignInAndSignUpPage/>} /> 
        </Routes>
      </>
    );
  }
}

export default App;
