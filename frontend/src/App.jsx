// import "./Vender/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./Vender/componets/NavBar";
import HomeVender from "./Vender/pages/homeVender";
import Events from "./Event/components/homeVender";
import "./Event/App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./Event/components/Navbar";
import HeroSection from "./Event/components/HeroSection";
import Services from "./Event/components/Services";
import About from "./Event/components/About";
import Contact from "./Event/components/Contact";
import Footer from "./Event/components/Footer";



import Signup from "./Vender/login signUp/pages/Signup";
import Login from "./Vender/login signUp/pages/Login";
import Logout from "./Vender/login signUp/pages/Logout";
import "./Vender/login signUp/App.css"


function App() {
  return (
    // <>
    //   <div className="App">
    //     <BrowserRouter>
    //       <NavBar />

    //       <div className="pages">
    //         <Routes>
    //           <Route path="/" element={<HomeVender />} />

    //         </Routes>
    //       </div>
    //     </BrowserRouter>
    //   </div>
    // </>

    <BrowserRouter>
      <Navbar />
      {/* --------------------------- */}
      <Routes>
        <Route path="/" element={<HomeEvent />} />



        <Route path="/services" element={<HomeVender />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;



function HomeEvent() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Events />
      <About />
      <Contact />
      <Footer />
      <Toaster />

    </div>
  )
}
