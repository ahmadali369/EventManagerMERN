import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./componets/NavBar";
import HomeVender from "./pages/homeVender";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          {/* <Navbar /> */}
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<HomeVender />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

      {/* <ServiceForm/> */}

      {/* <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
       </Box> */}
    </>
  );
}

export default App;
