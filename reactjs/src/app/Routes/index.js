import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MyRoutes } from "./routes";
import Loader from "../components/Loader";
import { useTitle } from "../helper";

import ReactGA from "react-ga";

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize("UA-153156664-1");
};

const loatPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

function RouteWithTitle({ title, ...props }) {
  useTitle(title);
  initGA();
  loatPageView();
  return <Route {...props} />;
}

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<Loader></Loader>}>
        <Switch>
          {MyRoutes.map(route => {
            return (
              <RouteWithTitle
                title={route.title}
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
