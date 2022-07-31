import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLogo">
          <h1 className="navbarTitle" onClick={handleLogoClick}>
            HDBooking
          </h1>
        </div>
        {!user && (
          <div className="navbarButtons">
            <button className="navbarBtn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="navbarBtn" onClick={handleRegisterClick}>
              Register
            </button>
          </div>
        )}
        {user && (
          <div className="userArea">
            <div className="username">{user.user.username}</div>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
