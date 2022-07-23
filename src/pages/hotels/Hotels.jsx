import { Footer, Header, Navbar, HotelList, SearchList } from "components";
import "./Hotels.css";

export default function Hotels() {
  return (
    <div className="hotels">
      <Navbar />
      <Header type="list" />
      <section>
        <main className="hotelsArea">
          <SearchList />
          <HotelList />
        </main>
      </section>
      <Footer />
    </div>
  );
}
