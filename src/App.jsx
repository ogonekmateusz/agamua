import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">{/* navbar */}</div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            {/* home */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
