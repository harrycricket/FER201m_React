import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail";
import { Contact } from "./components/Contact";
import Player from "./components/Player";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Player />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}
