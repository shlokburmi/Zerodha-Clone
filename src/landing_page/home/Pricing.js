import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      
      {/* Left Section */}
      <div className="row align-items-center">
        
        <div className="col-md-5">
          <h2>Unbeatable pricing</h2>
          <p style={{ fontSize: "18px", marginTop: "15px" }}>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a 
            href="/pricing"
            style={{ 
              color: "#2b7cd3",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "18px"
            }}
          >
            See pricing →
          </a>
        </div>

        {/* Right Pricing Features */}
        <div className="col-md-7 d-flex justify-content-center gap-5">

          <div className="text-center d-flex align-items-center">
            <img src="media/images/pricing0.png" width="120" alt="pricing" />
            <p className="text-medium">Free account opening</p>
          </div>

          <div className="text-center d-flex align-items-center">
            <img src="media/images/pricing0.png" width="120" alt="pricing" />
            <p className="text-medium ">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>

          <div className="text-center d-flex align-items-center">
            <img src="media/images/intradayTrades.png" width="120" alt="pricing" />
            <p className="mt-2">Intraday and F&O</p>
          </div>

        </div>
      </div>

<br></br>
      {/* Bottom Image Section */}
      

    </div>
  );
}

export default Pricing;
