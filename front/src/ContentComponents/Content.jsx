
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import HomeComponent from "./MainComponents/HomeComponent/HomeComponent";
import { Trending } from "./Trending/Trending";



export const Content = ({ videosDesctopList, channelLists }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderComponent />
                <div className="main-container">
                    {/* все страницы проекта */}
                    <BrowserRouter>
                        <Route path='/home' render={() => <HomeComponent videosDesctopList={videosDesctopList} channelLists = {channelLists} />} />
                        <Route path='/Trending' render={() => <Trending />} />
                    </BrowserRouter>
                </div>
            </div>
        </>
    )
}
