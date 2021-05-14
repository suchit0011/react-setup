import './App.scss';
import React,{useState,useEffect} from 'react';
import { Provider } from 'react-redux'
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store'
import Home from './frontend/home'
import NotFound from './frontend/notfound'
import Login from './frontend/authComponent/login'
import SignUp from './frontend/authComponent/signup'
import ForgotPassword from './frontend/authComponent/forgotPassword'
import ResetPassword from './frontend/authComponent/resetPassword'
import SpecificCategory from './frontend/specificCategory'
import ShoppingCart from './frontend/shoppingCart'
import ProductDetail from './frontend/productDetail'
import GuardedRoute from './frontend/authComponent/guardedRoute'


function App({userData}) {
  useEffect(() => {
    console.log('all userData', userData)
  }, [])
  const[isAutheticated, setisAutheticated] = useState(true);

  function login(){
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated)
  }

  function logout(){
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated)
  }

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <GuardedRoute exact path="/login" component={Login}  auth={!isAutheticated}  />
            <GuardedRoute exact path="/signup" component={SignUp} auth={!isAutheticated} />
            <GuardedRoute exact path="/forgotpassword" component={ForgotPassword} auth={!isAutheticated} />
            <GuardedRoute exact path="/resetpassword" component={ResetPassword} auth={!isAutheticated}/>
            <GuardedRoute exact path="/specificcategory" component={SpecificCategory} auth={isAutheticated} />
            <GuardedRoute exact path="/shoppingcart" component={ShoppingCart} auth={isAutheticated}/>
            <GuardedRoute exact path="/productdetail" component={ProductDetail} auth={isAutheticated} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}


// const mapStateToProps = state => {
//   return { userToken: state.userCount, userData: state.userList  };
// };

export default App;
// export default connect( mapStateToProps )(App);