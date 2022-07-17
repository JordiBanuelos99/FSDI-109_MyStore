import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Cart from "./components/cart";
import Admin from "./components/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./context/globalState";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
