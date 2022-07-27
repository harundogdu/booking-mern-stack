import "./HotelList.css";
import HotelListItem from "./HotelListItem";

export default function HotelList({ data: hotels }) {
  return (
    <div className="hotelList">
      {hotels.map((hotel) => (
        <HotelListItem key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
}
