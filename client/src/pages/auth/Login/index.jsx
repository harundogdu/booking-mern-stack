import { useAuth } from "context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {};

  const handleLoginClick = (e) => {};

  return (
    <div className="login">
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
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
            <div className="iconArea">
              {" "}
              {showPassword ? (
                <AiOutlineEye size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </div>
          </div>
        </div>
        <button className="loginButton" onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
}
