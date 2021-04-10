import React, { useState } from "react";
import { useSelector } from "react-redux";

//other
import "./Profile.scss";
import { Timeline } from "./components";

export const Profile = () => {
  // const userData = useSelector((state) => state.skate.userData);
  // const name = userData.fio.length ? userData.fio : userData.email;

  const [links, setLinks] = useState([
    {
      id: 0,
      name: "Timeline",
      isOpen: true,
    },
    {
      id: 1,
      name: "About",
      isOpen: false,
    },
    {
      id: 2,
      name: "Friends",
      isOpen: false,
    },
    {
      id: 3,
      name: "Photos",
      isOpen: false,
    },
    {
      id: 4,
      name: "More",
      isOpen: false,
    },
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

  return (
    <>
      <div className="profile anim">
        <div className="profile-avatar ">
          <img
            src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
            alt
            className="profile-img"
          />
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
                className="profile-menu-link active"
                onClick={() => {
                  handleLnkClick(link.id);
                }}
              >
                {link.name}
              </div>
            ) : (
              <div
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
      {links.find((link) => link.id === 0).isOpen ? <Timeline /> : null}
    </>
  );
};
