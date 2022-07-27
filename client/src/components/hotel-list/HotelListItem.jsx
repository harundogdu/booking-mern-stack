import { Link } from "react-router-dom";
import { calculateRatingTitle } from "utils/helper";
import "./HotelListItem.css";

export default function HotelListItem({ hotel }) {
  const tempImage =
    "https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=";
  return (
    <div className="hotelListItem">
      <div className="hotelListItem__img">
        <img src={hotel.photos[0] || tempImage} alt={hotel.name} />
      </div>
      <div className="content">
        <div className="content-properties">
          <h1 className="title">{hotel.name}</h1>
          <span className="small">{hotel.distance}m from center</span>
          <span className="green-btn">{hotel.type}</span>
          <strong>{hotel.title}</strong>
          <span className="ligth">
            {hotel.description.length > 80
              ? hotel.description.substring(0, 80) + "..."
              : hotel.description}
          </span>
          {hotel.freeCancellation && (
            <>
              <span className="free">Free cancellition</span>
              <span className="property">
                You can cancel later, so lock in this great price today!
              </span>
            </>
          )}
        </div>
        <div className="content-detail">
          <div className="content-point">
            <span className="state">{calculateRatingTitle(hotel.rating)}</span>
            <span className="point">{hotel.rating}</span>
          </div>
          <div className="content-price">
            <p className="price">${hotel.cheapestPrice}</p>
            <p className="text">Includes taxes and fees</p>
            <Link to={`/hotels/${hotel._id}`} className="btnPrice">
              See Availabity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
