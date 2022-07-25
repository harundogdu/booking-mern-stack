import { Footer, Header, Navbar, HotelList, SearchList } from "components";
import { useLocation } from "react-router-dom";
import "./Hotels.css";

export default function Hotels() {
  const location = useLocation();
  return (
    <div className="hotels">
      <Navbar />
      <Header type="list" />
      <section>
        <main className="hotelsArea">
          <SearchList state={location.state} />
          <HotelList />
        </main>
      </section>
      <Footer />
    </div>
  );
}
