import React from "react";
import {
  Route,
  Switch
} from "react-router";
import Details from "../src/pages/Details/details";
import Main from "../src/pages/Main/main";

const Routes = (props:any) => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/details" component={Details} />
  </Switch>
);
export default Routes;
