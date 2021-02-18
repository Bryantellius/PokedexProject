import React from "react";
import Pokedex from "./views/Pokedex";
import Pokemon from "./views/Pokemon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Pokedex />
      </Route>
      <Route exact path="/:pokemonId">
        <Pokemon />
      </Route>
    </Switch>
  </Router>
);

export default App;
