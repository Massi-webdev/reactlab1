import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import CurrentTime from "./CurrentTime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/images/logo.png"

function App() {

  const randomImgUrl = "https://picsum.photos/400/265"

  return (
    <BrowserRouter>
      <div> 
        
        <nav>
        <img src={logo} alt="a logo image" width={"35px"} height={"35px"} />
        <img src={require("./assets/images/logo.png")} alt="a logo image" width={"35px"} height={"35px"} />
        <img src={randomImgUrl} alt="a logo image" width={"35px"} height={"35px"} />

          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/about" className="nav-item">About Little Lemon</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <Link to="/currenttime" className="nav-item">Is it a workday?</Link>
        </nav>

        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutLittleLemon />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/currenttime" element={<CurrentTime />}></Route>
        </Routes>



      </div>


    </BrowserRouter>

    
  );
};

export default App;
