//Libs
import React from "react";
import { Route, Switch } from "react-router-dom";

//Other
import Context from "./Context";
import { SkateBoard } from "./templates/skateboard";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/skateBoard">
          <SkateBoard />
        </Route>
      </Switch>
    </>
  );
};
