import React,{useState} from 'react';
import { Link,Redirect } from 'react-router-dom';

const Header = (props) =>{
    return(
        <div className="header_box">
             <ul className="navbar-nav">
                <li className="nav-item">
                 <Link className="nav-link" to="login" >Login</Link>
               </li>
                <li className="nav-item">
                 <Link className="nav-link" to="signup" >Signup</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="forgotpassword" >Forgotpassword</Link>
               </li>
                <li className="nav-item">
                  <Link className="nav-link" to="resetpassword" >Resetpassword</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="specificcategory" >Specificcategory</Link>
                </li>
                <li className="nav-item">
                 <Link className="nav-link" to="shoppingcart" >Shoppingcart</Link>
               </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Productdetail" >Productdetail</Link>
                </li>
              </ul>
        </div>
    );
}

export default Header;
