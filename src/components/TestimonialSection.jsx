import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./TestimonialsSection.module.css";
import { quoteData } from "./constant";

function TestimonialsSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {/* testimonialSection */}
      <section
        className={` pt-[6rem] flex justify-center items-center flex-col  w-[75%]  `}
      >
        <div className={` container`}>
          <div className="flex justify-center items-center flex-col gap-[2.4rem] ">
            <h2 className="text-[3rem] font-semibold leadng-normal capitalize text-[#000] text-center">
              FATHER QUOTES
            </h2>
          </div>
          <div className={`relative ]`}>
            <Carousel
              responsive={responsive}
              arrows={false}
              swipeable={true}
              //   showDots={true}
              autoPlay={true}
              autoPlaySpeed={500}
              infinite={true}
              transitionDuration={2}
            >
              {
             quoteData?.map((item) => {
                return (
                  <div
                    key={item.author}
                    className="flex justify-between items-center flex-col max-w-[78.5rem] mx-auto pb-[2rem]"
                  >
                    <article>
                      <p className="text-[1.5rem] font-medium leading-[32px] pt-[2.4rem] pb-[3.2rem] text-center text-black">
                        {item?.quote}
                      </p>
                      <h3 className="text-[1.4rem] font-semibold leading-normal text-center text-black">
                        {item?.author}
                      </h3>
                      <h4 className="text-light-primaryGrey-tints-500 text-[1.4rem] font-normal text-center pb-[3.2rem]  text-black">
                        Author
                      </h4>
                    </article>
                    {/* <img alt="banner" src={images.testimonialimage} /> */}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Find-work */}
    </>
  );
}

export default TestimonialsSection;
