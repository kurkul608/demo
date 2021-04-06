//Libs
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

//Other
import { SkateBoardLoader } from "./templates/skateboard/Loader";
import { StartLoader } from "../src/selector/Loader";
// import { Selector } from "./selector";

const SkateBoard = lazy(() =>
  import("./templates/skateboard").then((module) => ({
    default: module.SkateBoard,
  }))
);
const Selector = lazy(() =>
  import("./selector").then((module) => ({
    default: module.Selector,
  }))
);
export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <React.Suspense fallback={<StartLoader />}>
            <Selector />
          </React.Suspense>
        </Route>
        <Route path="/skateBoard">
          <React.Suspense fallback={<SkateBoardLoader />}>
            <SkateBoard />
          </React.Suspense>
        </Route>
      </Switch>
    </>
  );
};
