import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RouterComponent from "./components/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <RouterComponent />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
