
import React from "react";
import MostWatched from "./MostWatched";



// id: 2,
// blackImg: "https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg",
// userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// userName: "Andy William",
// completed : true,
// views: "23k" ,
// ago: 1,
// desc: "How to do Basic Jumping and how to landing safely",
// timeMach : 4,

export const HomeComponent = ({channelLists, videosDesctopList}) => {
  return (
    <>
            <div className="main-header anim">Discover</div>


            
            <div className="main-blogs">
              <div style={{backgroundImage: "url(" + channelLists[0].blackImg + ")"}} className="main-blog anim">

                <div className="main-blog__title">{channelLists[0].desc}</div>
                <div className="main-blog__author" >
                  <div className="author-img__wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img className="author-img" src={channelLists[0].userImg}/>
                  </div>
                  <div className="author-detail">
                    <div className="author-name">{channelLists[0].userName}</div>
                    <div className="author-info">{channelLists[0].views} views <span className="seperate" />{channelLists[0].ago} weeks ago</div>
                  </div>
                </div>
                <div className="main-blog__time">{channelLists[0].timeMach} min</div>
              </div>
              <div style={{backgroundImage: "url(" + channelLists[1].blackImg + ")"}}  className="main-blog anim" >
                <div className="main-blog__title">{channelLists[1].desc}</div>
                <div className="main-blog__author tips">
                  <div className="main-blog__time">{channelLists[1].timeMach} min</div>
                  <div className="author-img__wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img className="author-img" src={channelLists[1].userImg} />
                  </div>
                  <div className="author-detail">
                    <div className="author-name">{channelLists[1].userName}</div>
                    <div className="author-info">{channelLists[1].views}  views <span />{channelLists[1].ago}  weeks ago</div>
                  </div>
                </div>
              </div>
            </div>






            <div className="small-header anim" >Most Watched</div>
            <div className="videos">
              {videosDesctopList.map((CurrentValue) => {
                return <MostWatched lists={CurrentValue} key={CurrentValue.id} />;
              })}
            </div>
        </>
    
        );
}




export default HomeComponent;