import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button.js';

export default class Navbar extends Component{
    render(){
        return (
            <div>
                    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                           <span> <i className="fas fa-home"/> </span>

                            <Link to="/">
                                <img src={logo} alt="store" className="navbar-brand"/>
                            </Link>
                            <ul className="navbar-nav align-intems-center">
                                <li className ="nav-item ml-5"></li>  
                                <Link to ="/" className="nav-Link bg-dark">
                                    products  
                                </Link>
                          </ul>
                            <Link to ="/cart" className="ml-auto">
                                <ButtonContainer>
                                        <span className="mr-2">
                                            <i className="fas fa-cart-plus"/>
                                            my cart 
                                       </span>
                                    </ButtonContainer>
                            </Link>
                    </NavWrapper>
               </div> 
        );
    }
}

const NavWrapper = styled.nav `  
text-transform: capitalize;
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem ;
    }
` 