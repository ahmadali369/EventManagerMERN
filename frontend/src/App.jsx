// import "./index.css";
import "./Vender/index.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Vender/componets/NavBar";
import HomeVender from "./Vender/pages/homeVender";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<HomeVender />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
