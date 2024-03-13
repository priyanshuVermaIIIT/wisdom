import React from "react";

const Card = (props) => {
  // console.log(props.tags);
  return (
    <div className="m-2 ">
      <div className=" w-[78vw] mx-auto  p-6  ">
        <blockquote className="text-xl italic text-gray-800">
          {props.quote}
        </blockquote>
        <cite className="block text-sm mt-4 text-black font-bold ">
          -{props.author}
        </cite>
        <span className="block text-sm mt-4 text-gray-600 font-semibold">
          Tags -[{props.tags.join(" ")}]
        </span>
        {/* <button
          onClick={() => {
            props.quoteShelf.push({
              quote: props.quote,
              author: props.author,
              tag: props.tags,
            });
          }}
        >
          add to quoteShelf
        </button> */}
      </div>
    </div>
  );
};

export default Card;
