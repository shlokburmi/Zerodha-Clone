import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png " alt='Hero Image' className='mb-5'></img>
                <h1>Invest in Everything</h1>
                <p>Online Platfom to invest in stocks, derivatives, mutual funds and more</p>
                <button className='p-3 btn btn-primary' style={{width:"12.5%",margin:"0 auto",backgroundColor:"#387ed1"}}>Sign up For Free</button>

            </div>
        </div>
    );
}
export default Hero;