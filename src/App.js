import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Game from "./routes/Game"
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/game" exact={true} component={Game} />
  </HashRouter>
  );
}

export default App;
