
import React from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import HomeComponent from "./MainComponents/HomeComponent/HomeComponent";



export const Content = (props) => {
    return (
        <>
            <div className="wrapper">
                <HeaderComponent/>
                <div className="main-container">
                    {/* все страницы проекта */}
                    <HomeComponent  videosDesctopList = {props.videosDesctopList}  />
                </div>
            </div>
        </>
    )
}
