
import React from "react";
import { useSelector } from "react-redux";
import BookmarkLists from "./BookmarkLists";


export const Bookmark = () => {
  const bookmark = useSelector((state) => state.skate.bookmark);
  let animNum = 0
  return (
    <>
            <div className="main-header anim">Bookmark</div>
            <div className="videos">
              {bookmark.map((CurrentValue) => {
                
                animNum > 5 ? animNum = 0: animNum += 0.1
                return <BookmarkLists anim={animNum} lists={CurrentValue} key={CurrentValue.id} />;
              })}
            </div>
        </>
    
        );
}




export default Bookmark;
