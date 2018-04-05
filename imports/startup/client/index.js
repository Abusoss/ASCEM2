import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import Routes from "../../routes/index";

const App = <Routes />;

Meteor.startup(() => {
  render(App, document.getElementById("app"));
});
