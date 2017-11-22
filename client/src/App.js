import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Pokedex from "./pages/Pokedex";
// import Home from "./pages/Home";
// import Game from "./pages/Game";
// import Profile from "./pages/Profile";
// import Vault from "./pages/Vault";

const App = () =>
  <Router>
    <div>

      
      {
        // This is where React Router will match the path.  If a path is
        // matched, the associated component will be rendered.
        // For example, if "/books" is matched, the Books component will
        // be rendered.
      }
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/home" component={Pokedex} />
        <Route exact path="/pokedex" component={Pokedex} />
        {
          // If no match, render the NoMatch component
        }
      </Switch>

    </div>
  </Router>;

export default App;