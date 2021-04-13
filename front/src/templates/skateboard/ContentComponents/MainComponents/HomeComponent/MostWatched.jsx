import React from "react";
import { Link } from "react-router-dom";




export const MostWatched = ({lists, anim}) => {
  console.log(anim)
  return (
    <Link
      className="nonestyleTagA"
      to={{
        pathname: "/skateBoard/Home/Trending",
        search: "",
        hash: "",
        state: {},
      }}
    >
      <div className="video anim" style={{"--delay": anim+`s`}}>
        <div className="video-time">{lists.timeMach} min</div>
        <div className="video-wrapper">
          <video muted>
            <source src={lists.videosorce} type="video/mp4" />
          </video>
          <div className="author-img__wrapper video-author">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img className="author-img" src={lists.userImg} />
          </div>
        </div>
        <div className="video-by">{lists.userName}</div>
        <div className="video-name">{lists.desc}</div>
        <div className="video-view">
          {lists.views} views
          <span className="seperate video-seperate" />
          {lists.ago} week ago
        </div>
      </div>
    </Link>
  );
}



