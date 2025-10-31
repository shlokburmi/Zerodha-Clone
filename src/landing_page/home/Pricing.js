import React from 'react';
function Pricing() {
    return (  
    <div className="col-12 d-flex justify-content-center">
      <div className='col-0'><h3 className="unbeatable pricing">Unbeatable pricing</h3>
        <br></br>
        <p className="text-left">We pioneered the concept of discount broking 
        and price transparency in India. Flat fees and no hidden charges.</p>
      </div>
      <div className='col-6'><img   src="media/images/pricing0.png" alt="pricing" width={100} style={{justifyContent:"right"}} />
        <p>Free account opening</p>
         <img   src="media/images/pricing0.png" alt="pricing" width={100} style={{justifyContent:"right"}} />
        <p>Free equity delivery and direct mutual funds</p>
         <img   src="media/images/intradayTrades.png" alt="pricing" width={100} style={{justifyContent:"right"}} />
        <p>Intraday and F&O</p>
      </div>
      </div>);
}

export default Pricing;