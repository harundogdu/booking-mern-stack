import {
  Footer,
  Header,
  Navbar,
  DetailsHeader,
  DetailsGallery,
  DetailsFooter,
} from "components";
import "./HotelDetails.css";

export default function HotelDetails() {
  return (
    <div className={`hotelDetails`}>
      <Navbar />
      <Header type="list" />
      <section>
        <main className={"hotelDetailsArea"}>
          <DetailsHeader />
          <DetailsGallery />
          <DetailsFooter />
        </main>
      </section>
      <Footer />
    </div>
  );
}
