
import React from "react";
import BookmarkLists from "./BookmarkLists";


export const Bookmark = ({bookmark}) => {
  return (
    <>
            <div className="main-header anim">Bookmark</div>
            <div className="videos">
              {bookmark.map((CurrentValue) => {
                return <BookmarkLists lists={CurrentValue} key={CurrentValue.id} />;
              })}
            </div>
        </>
    
        );
}




export default Bookmark;
