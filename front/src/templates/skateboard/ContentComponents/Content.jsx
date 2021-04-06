import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import HomeComponent from "./MainComponents/HomeComponent/HomeComponent";
import { PlayList } from "./PlayList/PlayList";
import { Trending } from "./Trending/Trending";

export const Content = ({ videosDesctopList, channelLists }) => {
  return (
    <>
      <div className="wrapper">
        <HeaderComponent />
        <div className="main-container">
          <Switch>
            <Route path="/skateBoard/home" exact>
              <HomeComponent
                videosDesctopList={videosDesctopList}
                channelLists={channelLists}
              />
            </Route>
            <Route path="/skateBoard/home/trending">
              <Trending />
            </Route>
            <Route path="/skateBoard/Playlist">
              <PlayList />
            </Route>
          </Switch>

          {/*</BrowserRouter>*/}
        </div>
      </div>
    </>
  );
};
