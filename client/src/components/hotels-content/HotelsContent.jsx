import HotelListItem from "components/hotel-list/HotelListItem";
import useFetch from "hooks/useFetch";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";

export default function HotelsContent({ state }) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: state?.date[0].startDate || new Date(),
      endDate: state?.date[0].endDate || new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState(state?.destination || "");
  const [info, setInfo] = useState({
    adults: state?.info.adults || 1,
    children: state?.info.children || 0,
    rooms: state?.info.rooms || 1,
  });
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);

  const { data: hotels, reFetch } = useFetch(
    `/hotels/search?city=${destination}&min=${minPrice || 0}&max=${
      maxPrice || 1000000
    }`
  );

  const handleOpenDateModal = () => {
    setOpenDateModal(!openDateModal);
  };

  const handleOption = (name, operation) => {
    setInfo((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? info[name] + 1 : info[name] - 1,
      };
    });
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    reFetch();
  };

  return (
    <section>
      <main className="hotelsArea">
        <div className="searchList">
          <h1 className="title">Search</h1>
          <form>
            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                placeholder="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="check-in">Check-in Date</label>
              <button
                type="button"
                className="searchItemBtn"
                onClick={handleOpenDateModal}
              >
                <span>
                  {format(date[0].startDate, "MM/dd/yyyy")} -{" "}
                  {format(date[0].endDate, "MM/dd/yyyy")}
                </span>
                {openDateModal ? (
                  <BsArrowUpSquareFill className="melih" />
                ) : (
                  <BsArrowDownSquareFill className="melih" />
                )}
              </button>
              {openDateModal && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="form-group">
              <p className="subTitle">Options</p>
              <div className="properties">
                <div className="group">
                  <div>
                    <span>Min price</span>
                    <span className="little">(per night)</span>
                  </div>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="group">
                  <div>
                    <span>Max price</span>
                    <span className="little">(per night)</span>
                  </div>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <div className="group">
                  <span>Adults</span>
                  <input
                    type="number"
                    value={info.adults}
                    onChange={(e) => handleOption("adults", e.target.value)}
                  />
                </div>
                <div className="group">
                  <span>Children</span>
                  <input
                    type="number"
                    value={info.children}
                    onChange={(e) => handleOption("children", e.target.value)}
                  />
                </div>
                <div className="group">
                  <span>Room</span>
                  <input
                    type="number"
                    value={info.rooms}
                    onChange={(e) => handleOption("rooms", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btnSearch" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="hotelList">
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              <HotelListItem key={hotel._id} hotel={hotel} />
            ))
          ) : (
            <div className="notFound">
              <h1>No hotels found!</h1>
              <p>Please try to change your search criteria or try to search</p>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
