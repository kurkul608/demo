//Libs
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

//Other
import Context from "./Context";
// import { SkateBoard } from "./templates/skateboard";

const SkateBoard = lazy(() =>
  import("./templates/skateboard").then((module) => ({
    default: module.SkateBoard,
  }))
);

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/skateBoard">
          <React.Suspense fallback={<p>Loading...</p>}>
            <SkateBoard />
          </React.Suspense>
        </Route>
      </Switch>
    </>
  );
};
