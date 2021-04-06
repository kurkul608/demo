import React, { lazy, useState } from "react";
import "../../assets/templates/skateBoard/css/SkateBoard.scss";
import Context from "../../Context";

const NavBar = lazy(() =>
  import("./NavBar/NavBar").then((module) => ({
    default: module.NavBar,
  }))
);

const Content = lazy(() =>
  import("./ContentComponents/Content").then((module) => ({
    default: module.Content,
  }))
);

export const SkateBoard = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "23k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 4,
    },
    {
      id: 2,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Sergo William",
      completed: true,
      views: "3k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 3,
    },
    {
      id: 3,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "13k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 2,
    },
    {
      id: 4,
      videosorce:
        "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed: true,
      views: "59k",
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach: 8,
    },
  ]);

  const [channelLists, setchannel] = useState([
    {
      id: 1,
      blackImg: "https://assets.codepen.io/3364143/skate-removebg-preview.png",
      userImg:
        "https://images.unsplash.com/photo-1560941001-d4b52ad00ecc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      userName: "Andy William",
      completed: true,
      views: "23k",
      ago: 1,
      desc: "How to do Basic Jumping and how to landing safely",
      timeMach: 4,
    },
    {
      id: 2,
      blackImg:
        "https://c0.anyrgb.com/images/1020/945/venice-beach-2018-outdoors-sport-men-jumping-desert-sunset-extreme-sports-one-person-action.jpg",
      userImg:
        "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      userName: "Tony Andrew",
      completed: true,
      views: "23k",
      ago: 1,
      desc: "Skateboard Tips You need to know",
      timeMach: 4,
    },
  ]);

  return (
    <>
      <Context.Provider value={{ lists }}>
        <div className="body">
          <div className="container">
            <React.Suspense fallback={<p>Loading...</p>}>
              <NavBar />
            </React.Suspense>

            <React.Suspense fallback={<p>Loading...</p>}>
              <Content videosDesctopList={lists} channelLists={channelLists} />
            </React.Suspense>
          </div>
        </div>
      </Context.Provider>
    </>
  );
};
