import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import "./assets/navigation.css";

import Hero from "./components/Hero.jsx"
import "./assets/hero.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
