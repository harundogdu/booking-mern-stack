import App from "App";
import { SearchContext } from "context";
import { AuthContextProvider } from "context/AuthContext";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AuthContextProvider>
      <SearchContext>
        <App />
      </SearchContext>
    </AuthContextProvider>
  </StrictMode>
);
