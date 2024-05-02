import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { VenderSerivceContextProvider } from "./context/venderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VenderSerivceContextProvider>
      <App />
    </VenderSerivceContextProvider>
  </React.StrictMode>
  
);
