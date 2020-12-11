import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tracker">
            <Track />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/details/:id">
            <SystemDetails />
          </Route>
          <Route exact path="/thanks">
            <Thanks />
          </Route>
          <Route path="/contribute/:id">
            <Contribute />
          </Route>
          <Route path="/:404">
            <Wrong />
          </Route>
        </Switch>
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
