import React, { useState } from "react";
import Navbar from "./Navbar";
import "./home.css"; // Import CSS for animations
import { Carousel } from "react-responsive-carousel";
import Card from "./Card";
import { quoteData } from "./constant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialsSection from "./TestimonialSection";
import Category from "./Category";
import CreateQuote from "./Createquote";
import QuoteShelf from "./QuoteShelf";
import Mylike from "./MyLike";
const image = [
  {
    url: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNjV8fHxlbnwwfHx8fHw%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1709113646175-dac6673b88f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1707343843598-39755549ac9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1707343843344-011332037abb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fHw%3D",
  },
];

const fadeProperties = {
  interval: 1000,
  transitionDuration: 500,
  infiniteLoop: true,
  indicators: false,
  autoPlay: true,
  showArrows: true,
  showStatus: false,
  showThumbs: false,
  showIndicators: false,
};

const Home = () => {
  const [qouteShelf, setquoteShelf] = useState([]);
  const [navLink, setnavLink] = useState(0);
  const [myLike, setmyLike] = useState([]);

  return (
    <>
      <div>
        <Navbar navLink={navLink} setnavLink={setnavLink} />
        {navLink === 0 ? (
          <>
            <h1 className="text-4xl text-center mt-24 font-serif">
              Welcome to Divinewisdom
            </h1>
            <p className=" mt-3 relative m-8 text-center mb-[5.5rem] ">
              Discover and share inspiring quotes from spiritual individuals
              around the world.
            </p>
            <div className=" w-[100%] flex justify-center ">
              <TestimonialsSection />
            </div>
            <Category
              qouteShelf={qouteShelf}
              setquoteShelf={setquoteShelf}
              myLike={myLike}
              setmyLike={setmyLike}
            />
            <CreateQuote />
          </>
        ) : navLink === 1 ? (
          <QuoteShelf qouteshelf={qouteShelf} />
        ) : navLink === 2 ? (
          <Mylike myLike={myLike} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
