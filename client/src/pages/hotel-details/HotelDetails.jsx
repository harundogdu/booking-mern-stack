import { Footer, Header, HotelDetailsContent, Navbar } from "components";
import useFetch from "hooks/useFetch";
import { useLocation } from "react-router-dom";
import "./HotelDetails.css";

export default function HotelDetails() {
  const location = useLocation();
  const url = `/hotels/${location.pathname.split("/")[2]}`
  const { data, error, loading } = useFetch(url.toString());
  console.log(data);
  return (
    <div className={`hotelDetails`}>
      <Navbar />
      <Header type="list" />
      {error && <div>Error</div>}
      {loading && <div>Loading...</div> }
      {data.data && <HotelDetailsContent hotel={data.data} />}
      <Footer />
    </div>
  );
}
