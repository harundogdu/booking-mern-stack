import { listArray } from "utils/helper";
import "./Header.css";
import { BiBed } from "react-icons/bi";
import { BsCalendar3, BsPersonFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export default function Header() {
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

  const [info, setInfo] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOpenDateModal = () => {
    setOpenDateModal(!openDateModal);
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
        <div className="textContainer">
          <h1>Find your next stay</h1>
          <h2>Search low prices on hotels, homes and much more...</h2>
        </div>
        {/* search Container */}
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
          <div className="searchItem">
            <BsPersonFill />
            <button className="searchItemBtn">
              {info.adults} adults · {info.children} children · {info.rooms}{" "}
              room
            </button>
          </div>
          <button className="searchBtn">
            <span>Search</span>
          </button>
        </div>
        {/* searchContainer */}
      </div>
    </div>
  );
}
