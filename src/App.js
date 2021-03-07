import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Game from "./routes/Game"
import Letter from "./routes/Letter"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/letter" component={Letter} />
  </HashRouter>
  );
}

export default App;
