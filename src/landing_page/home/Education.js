import React from 'react';
function Education() {
    return ( 
        <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 text-center">
        <img src="media/images/education.svg" alt="education" width={500} className="my-5"/>
      </div>
      <div className="col-6 text-start">
        <h3>Free and open market education</h3>
        <br></br>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a href='' className='text-decoration-none'>Varsity <i class="fa-solid fa-arrow-right"></i></a> 
        <br></br><br></br>
        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a href='' className='text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      
      </div>
    </div>
      );
}

export default Education;