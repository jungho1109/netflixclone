import React, { Fragment } from "react";
import Entry from "./components/layout/entry/Entry";
import { Route, Switch } from "react-router-dom";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";

const App = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Entry} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;
