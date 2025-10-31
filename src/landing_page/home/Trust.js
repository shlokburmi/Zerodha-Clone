import React from "react";

function Trust() {
  return (
    <div className="container">
      <div className="col-12 d-flex justify-content-center my-5">
        <div className="col-0 mx-32 align-self-center ">
          <h2>Trust with confidence</h2>
          <br />
          <h3>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3>No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.  
            {""} <a href="/philosophies"> Our philosophies.</a>
          </p>
          
          <h3>The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3>Do better with money</h3>
          <p>
            With initiatives like <a href="">Nudge</a> and <a href="">Kill Switch</a>, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/trust.png" alt="trust" width={580} />
          <p class="text-center" style={{ display:"flex", justifyContent:"center ", gap:"70px", marginBottom:"70px" }}>
    <a href="/products">
        Explore our products <i>→</i>
    </a>

    <a href="https://kite-demo.zerodha.com" class="demo-link">
        Try Kite demo <i>→</i>
    </a>
</p>
        </div>

      </div>



      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <img src="media/images/pressLogos.png" alt="Companies" className="" />
      </div>
      
    </div>
  );
}

export default Trust;