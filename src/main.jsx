import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Components/App.jsx";
// import { UserProvider } from "./Contexts/User.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <UserProvider> */}
        <App />
      {/* </UserProvider> */}
    </StrictMode>
  </BrowserRouter>
);
