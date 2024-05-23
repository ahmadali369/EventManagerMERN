import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "./Vender/index.css";

import { VenderSerivceContextProvider } from "./Event/context/venderContext.jsx";
// import { VenderSerivceContextProvid } from "./Vender/context/venderContext.jsx";

VenderSerivceContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <VenderSerivceContextProvider>
            <App />
        </VenderSerivceContextProvider>
        {/* <VenderSerivceContextProvid></VenderSerivceContextProvid> */}
    </React.StrictMode>

);
