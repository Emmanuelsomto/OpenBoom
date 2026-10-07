import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import SpotLight from "./pages/SpotLight";
import FreshDrops from "./pages/FreshDrops";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/discover" element={<Discover />}/>
        <Route path="/spotlight" element={<SpotLight />}/>
        <Route path="/freshdrops" element={<FreshDrops />}/>
      </Routes>
      <Footer />
    </div>
  );
}
