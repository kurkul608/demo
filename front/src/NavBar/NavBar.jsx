
import React from "react";
import { NavLink } from "react-router-dom";
import {ReactComponent as Home} from '../assets/templates/icons/navbar/home.svg'
import {ReactComponent as Streaming} from '../assets/templates/icons/navbar/streaming.svg'
import {ReactComponent as PlayList} from '../assets/templates/icons/navbar/playlist.svg'
import {ReactComponent as BookMark} from '../assets/templates/icons/navbar/bookmark.svg'
import { BrowserRouter, Route, Link } from "react-router-dom";

export const NavBar = () => {
 return (
     <>
   
      <div className="sidebar">
       <span className="logo">S</span>
       <a className="logo-expand" href="#">skateboard</a>
       <div className="side-wrapper">
        <div className="side-title">MENU</div>
        <div className="side-menu">


            <NavLink className="sidebar-link discover is-active" to="/Home">
             <Home/>
                Discover
            </NavLink>
         <NavLink className="sidebar-link" to='/streaming'>
          <Streaming />
          Streaming
         </NavLink>
         <NavLink className="sidebar-link discover is-active" to="/Playlist">
          <PlayList/>
          Playlist
         </NavLink>
         <NavLink className="sidebar-link" to='/bookmark'>
          <BookMark />
          Bookmark
         </NavLink>
        </div>
       </div>
       <div className="side-wrapper">
        <div className="side-title">CATEGORY</div>
        <div className="side-menu">
         <a className="sidebar-link" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor">
           <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M15.164 6.083l.948.011c3.405 0 5.888 2.428 5.888 5.78v4.307c0 3.353-2.483 5.78-5.888 5.78A193.5 193.5 0 0112.01 22c-1.374 0-2.758-.01-4.122-.038-3.405 0-5.888-2.428-5.888-5.78v-4.307c0-3.353 2.483-5.78 5.898-5.78 1.286-.02 2.6-.04 3.935-.04v-.163c0-.665-.56-1.204-1.226-1.204h-.972c-1.109 0-2.012-.886-2.012-1.965 0-.395.334-.723.736-.723.412 0 .736.328.736.723 0 .289.246.52.54.52h.972c1.481.01 2.688 1.194 2.698 2.64v.183c.619 0 1.238.008 1.859.017zm-4.312 8.663h-1.03v1.02a.735.735 0 01-.737.723.728.728 0 01-.736-.722v-1.021H7.31a.728.728 0 01-.736-.723c0-.395.334-.722.736-.722h1.04v-1.012c0-.395.324-.723.736-.723.403 0 .736.328.736.723v1.012h1.03c.403 0 .737.327.737.722a.728.728 0 01-.736.723zm4.17-1.629h.099a.728.728 0 00.736-.722.735.735 0 00-.736-.723h-.098a.722.722 0 100 1.445zm1.679 3.315h.098a.728.728 0 00.736-.723.735.735 0 00-.736-.723H16.7a.722.722 0 100 1.445z"></path>
          </svg>
          Live Stream
         </a>
         <a className="sidebar-link" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor">
           <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M7.33 2h9.34c3.4 0 5.32 1.93 5.33 5.33v9.34c0 3.4-1.93 5.33-5.33 5.33H7.33C3.93 22 2 20.07 2 16.67V7.33C2 3.93 3.93 2 7.33 2zm4.72 15.86c.43 0 .79-.32.83-.75V6.92a.815.815 0 00-.38-.79.84.84 0 00-1.28.79v10.19c.05.43.41.75.83.75zm4.6 0c.42 0 .78-.32.83-.75v-3.28a.839.839 0 00-1.28-.79.806.806 0 00-.38.79v3.28c.04.43.4.75.83.75zm-8.43-.75a.827.827 0 01-.83.75c-.43 0-.79-.32-.83-.75V10.2a.84.84 0 01.39-.79c.27-.17.61-.17.88 0s.42.48.39.79v6.91z"></path>
          </svg>
          Tutorial
         </a>
         <a className="sidebar-link" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor">
           <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M19.761 12.001c0 .814.668 1.475 1.489 1.475.414 0 .75.333.75.743v2.677C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.896v-2.677c0-.41.336-.743.75-.743.822 0 1.49-.662 1.49-1.475 0-.793-.641-1.39-1.49-1.39a.752.752 0 01-.53-.217.74.74 0 01-.22-.525l.002-2.764C2.002 4.842 3.86 3 6.144 3h11.712c2.284 0 4.143 1.842 4.143 4.105L22 9.782a.741.741 0 01-.219.526.753.753 0 01-.531.218c-.821 0-1.489.662-1.489 1.475zm-5.509.647l1.179-1.137a.73.73 0 00-.409-1.25l-1.629-.236-.729-1.462a.737.737 0 00-.662-.41H12a.74.74 0 00-.663.409l-.729 1.463-1.626.235a.735.735 0 00-.6.498.724.724 0 00.187.753l1.179 1.137-.278 1.608a.727.727 0 00.295.719.742.742 0 00.777.054L12 14.27l1.455.757a.733.733 0 00.78-.053.723.723 0 00.296-.718l-.279-1.608z"></path>
          </svg>
          Competation
         </a>
         <a className="sidebar-link" href="#">
          <svg viewBox="0 0 24 24" fill="currentColor">
           <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M16.158 8.233a4.207 4.207 0 01-4.209 4.234 4.207 4.207 0 01-4.21-4.234A4.206 4.206 0 0111.95 4a4.206 4.206 0 014.21 4.233zM11.95 20c-3.431 0-6.36-.544-6.36-2.72 0-2.177 2.91-2.74 6.36-2.74 3.431 0 6.361.544 6.361 2.72S15.399 20 11.949 20zm6.008-11.69a5.765 5.765 0 01-.984 3.24.158.158 0 00.107.245 3.4 3.4 0 00.483.046c1.643.044 3.118-1.02 3.525-2.621.604-2.379-1.168-4.514-3.425-4.514-.245 0-.48.026-.708.073-.031.007-.064.021-.082.05-.022.034-.006.08.016.11a5.807 5.807 0 011.068 3.37zm2.721 5.203c1.104.217 1.83.66 2.131 1.304a1.923 1.923 0 010 1.67c-.46.998-1.944 1.319-2.52 1.402-.12.018-.215-.086-.203-.206.295-2.767-2.048-4.08-2.654-4.381-.026-.014-.032-.034-.03-.047.003-.009.013-.023.033-.026 1.312-.024 2.722.156 3.243.284zM6.438 11.84c.164-.004.325-.019.483-.046a.158.158 0 00.106-.245 5.765 5.765 0 01-.984-3.24c0-1.25.39-2.416 1.068-3.372.022-.03.037-.075.016-.11-.017-.027-.051-.042-.082-.05a3.52 3.52 0 00-.71-.072c-2.255 0-4.027 2.135-3.423 4.514.407 1.6 1.882 2.664 3.525 2.621zm.159 1.414c.003.013-.003.033-.028.047-.607.302-2.95 1.614-2.656 4.38.013.121-.082.224-.201.207-.577-.083-2.06-.404-2.52-1.402a1.917 1.917 0 010-1.67c.3-.644 1.026-1.087 2.13-1.305.522-.127 1.93-.307 3.244-.283.02.003.03.017.03.026z"></path>
          </svg>
          Community
         </a>
        </div>
       </div>
      </div>
     </>
 )
}
