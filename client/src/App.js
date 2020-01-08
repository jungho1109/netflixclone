import React, { Fragment, useEffect } from "react";
import Entry from "./components/layout/entry/Entry";
import { Route, Switch } from "react-router-dom";
import Register from "./components/layout/auth/Register";
import Login from "./components/layout/auth/Login";
import {store} from './index';
import {loadUser} from './reducers/auth';
import Landing from "./components/Landing/Landing";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Fragment>
      <Route exact path="/" component={Entry} />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={Landing}/>
      </Switch>
    </Fragment>
  );
};

export default App;
