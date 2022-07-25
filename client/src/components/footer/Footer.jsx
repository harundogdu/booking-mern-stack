import { format } from "date-fns";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const footerItems = [
    { id: "1", title: "About" },
    { id: "2", title: "Contact" },
    { id: "3", title: "Terms" },
    { id: "4", title: "Privacy" },
    { id: "5", title: "Cookies" },
    { id: "6", title: "Help" },
    { id: "7", title: "Careers" },
    { id: "8", title: "Advertise" },
    { id: "9", title: "Blog" },
    { id: "10", title: "Advertise" },
  ];
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="emailArea">
          <div className="emailAreaContainer">
            <div className="emailTitles">
              <h1>Save time, save money!</h1>
              <h2>Sign up and we'll send the best deals to you</h2>
            </div>
            <div className="emailInputContainer">
              <div className="inputInnerContainer">
                <input type="text" placeholder="Your email" />
                <button className="emailBtn">Subscribe</button>
              </div>
              <div className="checkboxInnerContainer">
                <input type="checkbox" />
                <span>Send me a link to get the FREE Booking.com app!</span>
              </div>
            </div>
          </div>
          <div className="emailFooterContainer">
            <div className="buttonUpper">
              <button className="btnUpper">List your property</button>
            </div>
            <ul className="footerItems">
              <li>
                <NavLink to={"/"}>Mobile version</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Your account</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Make changes to your booking online</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Customer Service help</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Become an affilate</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Booking.com for Businnes</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerArea">
          <div className="footerInnerContainer">
            <div className="list">
              <ul className="footerItems">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={"/"}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="footerItems">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={"/"}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="footerItems">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={"/"}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="footerItems">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={"/"}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="footerItems">
                {footerItems.map((item) => (
                  <li key={item.id}>
                    <NavLink to={"/"}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="copyright">
              <span>
                Copyright © 2022 - {format(new Date(), "yyyy")} | HDBooking™.
                All rights reserved.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
