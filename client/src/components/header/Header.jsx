import { listArray } from "utils/helper";
import "./Header.css";
import { BiBed } from "react-icons/bi";
import { BsCalendar3, BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useSearch } from "context/SearchContext";

export default function Header({ type }) {
  const navigate = useNavigate();
  const { dispatch } = useSearch();

  const [firstOpen, setFirstOpen] = useState(false);
  const [openDateModal, setOpenDateModal] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestination] = useState("");

  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [info, setInfo] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOpenDateModal = () => {
    setOpenDateModal(!openDateModal);
  };

  const handleOpenInfoModal = () => {
    setOpenInfoModal(!openInfoModal);
  };

  const handleOption = (name, operation) => {
    setInfo((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? info[name] + 1 : info[name] - 1,
      };
    });
  };

  const handleSearchClick = () => {
    if (!destination || !date || !info) {
      alert("Please fill all fields");
      return;
    }
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        city: destination,
        dates: date,
        info,
      },
    });
    navigate("/hotels", { state: { destination, date, info } });
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <ul className="listContainer">
          {listArray.map((item) => (
            <li className={`${item.isActive && "active"} item`} key={item.id}>
              <span>{item.icons}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        {/* textContainer */}
        {type !== "list" && (
          <div className="textContainer">
            <h1>Find your next stay</h1>
            <h2>Search low prices on hotels, homes and much more...</h2>
          </div>
        )}
        {/* search Container */}
        {type !== "list" && (
          <div className="searchContainer">
            <div className="searchItem">
              <BiBed />
              <input
                type="text"
                placeholder="Where are you going?"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
            </div>
            <div className="searchItem" id="calendar">
              <BsCalendar3 />
              <button className="searchItemBtn" onClick={handleOpenDateModal}>
                {firstOpen ? (
                  <span>
                    {format(date[0].startDate, "MM/dd/yyyy")} -{" "}
                    {format(date[0].endDate, "MM/dd/yyyy")}
                  </span>
                ) : (
                  <span onClick={() => setFirstOpen(true)}>
                    Check in - Check out
                  </span>
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
            <div className="searchItem" id="dropdown">
              <BsPersonFill />
              <button className="searchItemBtn" onClick={handleOpenInfoModal}>
                {info.adults} adults · {info.children} children · {info.rooms}{" "}
                room
              </button>
              {openInfoModal && (
                <div className="searchItemDropdown">
                  <div className="searchDropdownItem">
                    <label>Adults</label>
                    <div className="buttonContainer">
                      <button
                        disabled={info.adults <= 1}
                        onClick={() => handleOption("adults", "d")}
                      >
                        -
                      </button>
                      <span>{info.adults}</span>
                      <button onClick={() => handleOption("adults", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="searchDropdownItem">
                    <label>Children</label>
                    <div className="buttonContainer">
                      <button
                        disabled={info.children <= 0}
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span>{info.children}</span>
                      <button onClick={() => handleOption("children", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="searchDropdownItem">
                    <label>Rooms</label>
                    <div className="buttonContainer">
                      <button
                        disabled={info.children <= 1}
                        onClick={() => handleOption("rooms", "d")}
                      >
                        -
                      </button>
                      <span>{info.rooms}</span>
                      <button onClick={() => handleOption("rooms", "i")}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="searchBtn" onClick={handleSearchClick}>
              <span>Search</span>
            </button>
          </div>
        )}
        {/* searchContainer */}
      </div>
    </div>
  );
}
