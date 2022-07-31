import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    }
  };

  return (
    <div className="login">
      {error && <div className="error">{error}</div>}
      <form action="" autoComplete="off">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="relativeArea">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            <div className="iconArea">
              {" "}
              {showPassword ? (
                <AiOutlineEye
                  size={22}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiFillEye size={22} onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>
        </div>
        <button
          disabled={loading}
          className="loginButton"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </form>
    </div>
  );
}
