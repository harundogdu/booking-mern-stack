import "./HotelListItem.css";

export default function HotelListItem() {
  return (
    <div className="hotelListItem">
      <div className="hotelListItem__img">
        <img
          src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt=""
        />
      </div>
      <div className="content">
        <div className="content-properties">
          <h1 className="title">Tower Street Apartments</h1>
          <span className="small">500m from center</span>
          <span className="green-btn">Free airport taxi</span>
          <strong>Studio Apertment with Air conditioning</strong>
          <span className="ligth">Entire studio · 1 bathroom · 21m full bed</span>
          <span className="free">Free cancellition</span>
          <span className="property">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="content-detail">
          <div className="content-point">
            <span className="state">Excellent</span>
            <span className="point">8.9</span>
          </div>
          <div className="content-price">
            <p className="price">$123</p>
            <p className="text">Includes taxes and fees</p>
            <button className="btnPrice">See Availabity</button>
          </div>
        </div>
      </div>
    </div>
  );
}
