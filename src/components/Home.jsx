import React from "react";
import Navbar from "./Navbar";
import "./home.css"; // Import CSS for animations
import Carousel from "./Carousel";
import CustomQuoteCard from "./Card";

import App from "./Card";

const quotes = [
  {
    id: 1,
    quote:
      "“I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, This is what it is to be happy.",
    author: "Steve Jobs",
    likes: 100,
  },
  {
    id: 2,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    likes: 150,
  },
  {
    id: 3,
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    likes: 120,
  },
  {
    id: 4,
    quote:
      "“A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.”",
    author: "Theodore Roosevelt",
    likes: 200,
  },
  {
    id: 5,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    likes: 180,
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />

      <h1 className="text-4xl text-center mt-24 font-serif">
        Welcome to Divinewisdom
      </h1>
      <p className=" mt-3 relative m-8 text-center mb-[5.5rem] ">
        Discover and share inspiring quotes from spiritual individuals around
        the world.
      </p>
      <Carousel />

      <h1 className="font-serif items-center text-center text-7xl mt-16">
        Popular Quotes
      </h1>
    
      <div className="w-[50%] mt-10 text-center ml-28 space-y-7">
        {quotes.map(({ id, quote, author, likes }) => (
          <CustomQuoteCard
            key={id}
            quote={quote}
            author={author}
            likes={likes}
          />
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default Home;
