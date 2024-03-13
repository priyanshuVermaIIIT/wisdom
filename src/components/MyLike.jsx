import React from "react";
import Card from "./Card";

function Mylike(props) {
  console.log("hii", props);
  return (
    <>
      {props.myLike.length === 0 ? (
        <h1 className="text-5xl font-extrabold font-mono">NO SAVED</h1>
      ) : (
        <div>
          {props.myLike.map((item) => {
            return (
              <Card
                quote={item.quote}
                author={item.author}
                tags={item.tags}
                // quoteShelf={props.quoteShelf}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Mylike;
