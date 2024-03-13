import React, { useEffect, useState } from "react";
import { quoteData } from "./constant";
import Card from "./Card";

function Category(props) {
  const [tag, setTag] = useState("all");
  const [filterData, setFilterData] = useState(quoteData);
  useEffect(() => {
    const data = quoteData.filter((item) => {
      return item.tags.includes(tag);
    });
    tag === "all" ? setFilterData(quoteData) : setFilterData(data);
  }, [tag]);
  console.log("hello", props);
  return (
    <>
      <div className="flex gap-8 p-5 justify-center ">
        <span
          className={`cursor-pointer capitalize ${
            tag === "all" ? " font-semibold border-b-2 border-black " : ""
          } `}
          onClick={() => {
            setTag("all");
          }}
        >
          all
        </span>
        <span
          className={`cursor-pointer capitalize ${
            tag === "achievement"
              ? " font-semibold border-b-2 border-black font-lg"
              : ""
          } `}
          onClick={() => {
            setTag("achievement");
          }}
        >
          achievement
        </span>
        <span
          className={`cursor-pointer capitalize ${
            tag === "inspiration"
              ? " font-semibold border-b-2 border-black font-lg"
              : ""
          } `}
          onClick={() => {
            setTag("inspiration");
          }}
        >
          inspiration
        </span>
        <span
          className={`cursor-pointer capitalize ${
            tag === "passion"
              ? " font-semibold border-b-2 border-black font-lg"
              : ""
          } `}
          onClick={() => {
            setTag("passion");
          }}
        >
          passion
        </span>
        <span
          className={`cursor-pointer capitalize ${
            tag === "life"
              ? " font-semibold border-b-2 border-black font-lg"
              : ""
          } `}
          onClick={() => {
            setTag("life");
          }}
        >
          life
        </span>
      </div>
      <div className="p-10">
        {filterData?.map((item) => (
          <div className=" w-[78vw] mx-auto border-b-2 border-gray-700 p-6 flex justify-center flex-col">
            <Card
              quote={item.quote}
              author={item.author}
              tags={item.tags}
              // quoteShelf={props.quoteShelf}
            />
            <div>
              <button
                className="  bg-amber-800 mx-32 w-60"
                onClick={() => {
                  let data = [...props.qouteShelf];
                  data.push(item);
                  props.setquoteShelf(data);
                }}
              >
                add to quoteShelf
              </button>
              <button
                className=" bg-amber-800 mx-32 w-56"
                onClick={() => {
                  let data = [...props.myLike];
                  data.push(item);
                  props.setmyLike(data);
                }}
              >
                LIKE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
