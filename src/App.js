import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Game from "./routes/Game"
import Letter from "./routes/Letter"
import Present from "./routes/Present"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/letter" component={Letter} />
      <Route path="/present" component={Present} />
  </HashRouter>
  );
}

export default App;
