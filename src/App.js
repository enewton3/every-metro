import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Track from "./pages/Track";
import SystemDetails from "./pages/SystemDetails";
import Foot from "./components/Foot";
import Wrong from "./pages/Wrong";
import Thanks from "./pages/Thanks";
import Contribute from "./pages/Contribute";
import ScrolltoTop from "./components/ScrolltoTop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <ScrolltoTop />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracker" element={<Track />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:id" element={<SystemDetails />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/contribute/:id" element={<Contribute />} />
          <Route path="/:404" element={<Wrong />} />
        </Routes>
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
