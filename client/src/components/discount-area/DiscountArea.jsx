import React from "react";

export default function DiscountArea() {
  return (
    <div className="discountContainer">
      <img
        src="https://t-cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png"
        alt="Discount Area"
      />
      <div className="discountInnerContainer">
        <h1 className="discountTitle">Get instant discounts</h1>
        <span className="discountSubTitle">
          Simply sign into your Booking.com account and look for <br /> the blue
          Genius logo to save
        </span>
        <div className="discountBtnContainer">
          <button>Sign in</button>
          <button className="button">Register</button>
        </div>
      </div>
    </div>
  );
}
