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
    <Switch>
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/home" component={Pokedex} />
      <Route exact path="/profile" component={Pokedex} />      
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/game" component={Pokedex} />  
      <Route exact path="/vault" component={Pokedex} />      
    </Switch>

    </div>
  </Router>;

export default App;