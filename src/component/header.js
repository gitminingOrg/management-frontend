//header bar
import React from "react";
import logo from '../image/logo.png'

class Header extends React.Component{
    render() {
        return (
            <div id="header" className="header" >
                <div className="navbar-top">
                    <div className="category">
                        <a href="#">
                            <i className="fa fa-bars" />
                        </a>
                        <a className="logo-font">Gmair</a>
                    </div>

                    <div className="info-right">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="One Admin" className="logo-img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;