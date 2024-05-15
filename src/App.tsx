import "./App.css";
import "./scss/style.scss";

import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import routes from "./components/Route/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <ProtectedRoute
                key={route.path}
                path={route.path}
                component={route.component}
                type={route.type}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
