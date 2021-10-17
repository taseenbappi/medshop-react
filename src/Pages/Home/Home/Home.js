import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Prevention from '../Prevention/Prevention';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Prevention></Prevention>
            <About></About>
        </div>
    );
};

export default Home;