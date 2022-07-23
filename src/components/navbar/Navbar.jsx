import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLogo">
          <h1 className="navbarTitle" onClick={handleLogoClick}>HDBooking</h1>
        </div>
        <div className="navbarButtons">
          <button className="navbarBtn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="navbarBtn" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
