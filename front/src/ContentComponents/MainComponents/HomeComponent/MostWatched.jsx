import React from "react";





// id: 1,
// videosorce: "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
// userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// userName: "Andy William",
// completed : true,
// views: "53k" ,
// ago: 1,
// timeMach : 8,

class Content extends React.Component {
    render() {
      return (
        <div className="video anim" >
        <div className="video-time">{this.props.lists.timeMach} min</div>
        <div className="video-wrapper">
          <video muted>
            <source src={this.props.lists.videosorce} type="video/mp4" />
          </video>
          <div className="author-img__wrapper video-author">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img className="author-img" src={this.props.lists.userImg}  />
          </div>
        </div>
        <div className="video-by">{this.props.lists.userName}</div>
        <div className="video-name">{this.props.lists.desc}</div>
        <div className="video-view">{this.props.lists.views} views<span className="seperate video-seperate" />{this.props.lists.ago} week ago</div>
      </div>
      );
    }
  }


export default Content;