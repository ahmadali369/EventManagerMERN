import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./Vender/index.css";
import { AuthProvider } from "./Vender/login signUp/store/auth.jsx";

import { VenderSerivceContextProvider } from "./Vender/context/venderContext.jsx";


VenderSerivceContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
  <AuthProvider>
    <VenderSerivceContextProvider>
      <App />
    </VenderSerivceContextProvider>
  </AuthProvider>

  </React.StrictMode>

);
