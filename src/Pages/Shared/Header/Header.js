import React from 'react';
import './Header.css';
import logo from '../../../images/Banner&Background/logo.png';

const Header = () => {
    return (
        <div className="container-fluid m-auto">
            <div className="menu-container row shadow-sm  ">
                <div className="menu-img col-md-2 col-lg-2 col-12 col-sm-12 p-3">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-10 col-lg-10 col-12 col-sm-12" >
                    <ul className=" items-container d-flex justify-content-lg-end p-2 justify-content-sm-center justify-content-md-center
                justify-content-center">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;