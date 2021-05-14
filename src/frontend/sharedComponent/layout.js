import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


const Layout = (props) =>{
    return(
        <div className="layout_box">
            <Header />
            {props.children }
            <Footer />
        </div>
    );
}

export default Layout;

