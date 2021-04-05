import React from "react";
import "./assets/templates/css/SkateBoard.scss";
import Context from "./Context";


const NavBar = React.lazy(()=> import('./NavBar/NavBar').then(module=>({default:module.NavBar})))


const Content = React.lazy(()=> import('./ContentComponents/Content').then(module=>({default:module.Content})))


export const App = () => {
  const [lists, setLists] = React.useState([
    { 
      id: 1,
      videosorce: "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
      userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      userName: "Andy William",
      completed : true,
      views: "23k" ,
      ago: 1,
      desc: " Basic how to ride your skateboard comfortly",
      timeMach : 4,
  },
  { 
    id: 2,
    videosorce: "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
    userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    userName: "Sergo William",
    completed : true,
    views: "3k" ,
    ago: 1,
    desc: " Basic how to ride your skateboard comfortly",
    timeMach : 3,
},
{ 
  id: 3,
  videosorce: "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
  userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  userName: "Andy William",
  completed : true,
  views: "13k" ,
  ago: 1,
  desc: " Basic how to ride your skateboard comfortly",
  timeMach : 2,
},
{ 
  id: 4,
  videosorce: "https://player.vimeo.com/external/436572488.sd.mp4?s=eae5fb490e214deb9ff532dd98d101efe94e7a8b&profile_id=139&oauth2_token_id=57447761",
  userImg: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  userName: "Andy William",
  completed : true,
  views: "59k" ,
  ago: 1,
  desc: " Basic how to ride your skateboard comfortly",
  timeMach : 8,
},
  
  ]);

  return (
    <Context.Provider value={{ lists }}>
      <div className="container">
        <React.Suspense fallback={<p>Loading...</p>}>
          <NavBar />
        </React.Suspense>

        <React.Suspense fallback={<p>Loading...</p>}>
          <Content videosDesctopList = {lists} />
        </React.Suspense>
      </div>
    </Context.Provider>
  );
}


