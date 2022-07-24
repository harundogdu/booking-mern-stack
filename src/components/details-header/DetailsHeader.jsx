import "./DetailsHeader.css";
import { HiLocationMarker } from "react-icons/hi";

export default function DetailsHeader() {
  return (
    <div className="detailsArea">
      <div className="inner">
        <div className="detailHeader">
          <h1 className="detailsTitle">GrandHotel</h1>
          <p className="detailsSubtitle">
            <HiLocationMarker />
            <span>Elton St 125 New york</span>
          </p>
        </div>
        <div className="buttonContainer">
          <button className="btnReserve">Reserve or Book Now!</button>
        </div>
      </div>
      <div className="property">Excellent location - 500m from center</div>
      <div className="taxiArea">
        Book a stay over $144 at this property and get a free airport taxis
      </div>
    </div>
  );
}
