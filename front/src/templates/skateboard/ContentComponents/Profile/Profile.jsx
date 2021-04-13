import React, { useState } from "react";

//other
import "./Profile.scss";
import { Album, Pages, Timeline, Event } from "./components";
import { useSelector } from "react-redux";

export const Profile = () => {
  const [links, setLinks] = useState([
    {
      id: 0,
      name: "Timeline",
      isOpen: true,
      component: <Timeline />
    },
    {
      id: 1,
      name: "Album",
      isOpen: false,
      component: <Event />
    },
    {
      id: 2,
      name: "Friends",
      isOpen: false,
      component: <Pages />
    },
    {
      id: 3,
      name: "Story",
      isOpen: false,
      component: <Album />
    },
    // {
    //   id: 4,
    //   name: "More",
    //   isOpen: false,
    //   component: <Pages />
    // },
  ]);

  const handleLnkClick = (id) => {
    setLinks((prev) => {
      const newState = prev.map((link) => {
        if (link.id === id) {
          link.isOpen = true;
        } else {
          link.isOpen = false;
        }
        return link;
      });
      return newState;
    });
  };




  
  const avatar = useSelector((state) => state.skate.profile.avatar);
  return (
    <>
      <div className="profile anim">
        <div className="profile-avatar ">
          <img src={avatar} alt className="profile-img" />
          <div className="profile-name">Quan Ha</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          alt
          className="profile-cover"
        />
        <div className="profile-menu">
          {links.map((link) =>
            link.isOpen ? (
              <div
                key={link.id}
                className="profile-menu-link active"
                onClick={() => {
                  handleLnkClick(link.id);
                }}
              >
                {link.name}
              </div>
            ) : (
              <div
                key={link.id}
                className="profile-menu-link"
                onClick={() => {
                  handleLnkClick(link.id);
                }}
              >
                {link.name}
              </div>
            )
          )}
        </div>
      </div>


      {
        links.filter((link) => link.isOpen? link.component : null)[0].component
      }


    </>
  );
};
