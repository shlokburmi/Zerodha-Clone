import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function SupportPage() {
    return ( 
        <>
         <Navbar/>
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        <Awards/>
        <OpenAccount/>
        <Footer/>

        </>
    );
}

export default SupportPage;