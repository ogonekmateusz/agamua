import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import "./assets/navigation.css";

import Hero from "./components/Hero.jsx";
import "./assets/hero.css";

import AboutMe from "./components/AboutMe.jsx";
import "./assets/aboutMe.css";

import Services from "./components/Services.jsx";
import ".//assets/services.css";

import MyWorks from "./components/MyWorks.jsx";
import "./assets/myWorks.css";

import Contact from "./components/Contact.jsx";
import "./assets/contact.css";

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
            <AboutMe />
            <Services></Services>
            <MyWorks></MyWorks>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
