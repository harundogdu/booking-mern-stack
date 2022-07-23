import "./SearchList.css";
export default function SearchList() {
  return (
    <div className="searchList">
      <h1 className="title">Search</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" placeholder="destination" />
        </div>
        <div className="form-group">
          <label htmlFor="check-in">Check-in Date</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <p className="subTitle">Options</p>
          <div className="properties">
            <div className="group">
              <div>
                <span>Min price</span>
                <span className="little">(per night)</span>
              </div>
              <input type="number" />
            </div>
            <div className="group">
              <div>
                <span>Max price</span>
                <span className="little">(per night)</span>
              </div>
              <input type="number" />
            </div>
            <div className="group">
              <span>Adult</span>
              <input type="number" />
            </div>
            <div className="group">
              <span>Children</span>
              <input type="number" />
            </div>
            <div className="group">
              <span>Room</span>
              <input type="number" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btnSearch">Search</button>
        </div>
      </form>
    </div>
  );
}
