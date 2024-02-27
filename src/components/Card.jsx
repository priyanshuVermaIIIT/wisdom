import React, { useState } from "react";

function CustomQuoteCard({ quote, author }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className=" rounded-lg m-2">
      <hr className="w-auto h-[2px] bg-amber-900 mt-2" />
      
        <div className="flex  p-4 justify-evenly">
          <p className="text-sm font-medium  justify-end">{quote}</p>
          <button onClick={handleLike} className="float-right">
            <img src="like.svg" alt="like" className=" w-[1.5%] absolute mx-10  " />
          </button>
        </div>
        <div className="flex justify-around">
          <p className="text-sm font-extrabold text-amber-900">- {author}</p>
          <div className="flex items-end ">
            <span className="text-sm ">
              {likes} {likes === 1 ? "Like" : "Likes"}
            </span>
          </div>
        </div>
      </div>
   
  );
}

export default CustomQuoteCard;
