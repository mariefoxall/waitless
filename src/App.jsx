import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import clownFace from "./assets/clown.png";
import Menu from "./Menu/Menu";
import Shows from "./Shows/Shows";
import Music from "./Music/Music";
import Bio from "./Bio/Bio";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import Videos from "./Videos/Videos";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <button className="home-button">
          <Link to="/">
            <img src={clownFace} className="logo" alt="Spooky clown face" />
          </Link>
        </button>
        <h1>WAIT//LESS</h1>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/music" element={<Music />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
