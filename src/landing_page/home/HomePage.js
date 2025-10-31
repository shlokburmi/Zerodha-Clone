import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Trust from './Trust';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        
        <Stats/>
        <Pricing/>
        <Education/>
        <Trust/>
        <OpenAccount/>

        <Footer/>

        </>
    );
}

export default HomePage;