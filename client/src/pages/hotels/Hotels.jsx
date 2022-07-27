import { Footer, Header, HotelsContent, Navbar } from "components";
import { useLocation } from "react-router-dom";
import "./Hotels.css";

export default function Hotels() {
  const location = useLocation();
  return (
    <>
      <div className="hotels">
        <Navbar />
        <Header type="list" />
        <HotelsContent state={location.state} />
        <Footer />
      </div>
    </>
  );
}
