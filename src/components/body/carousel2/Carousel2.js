import React, { useState, useRef, useEffect } from 'react'
import { slides } from './data';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Carousel2 = () => {

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  // const movePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevState) => prevState - 1);
  //   }
  // };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  // const isDisabled = (direction) => {
  //   if (direction === 'prev') {
  //     return currentIndex <= 0;
  //   }

  //   if (direction === 'next' && carousel.current !== null) {
  //     return (
  //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
  //     );
  //   }

  //   return false;
  // };

  // useEffect(() => {
  //   if (carousel !== null && carousel.current !== null) {
  //     carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
  //   }
  // }, [currentIndex]);

  // useEffect(() => {
  //   maxScrollWidth.current = carousel.current
  //     ? carousel.current.scrollWidth - carousel.current.offsetWidth
  //     : 0;
  // }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top items-center left w-full h-full">
          <AiOutlineLeft
            // onClick={movePrev}
            className="hover:bg-blue-900/75 text-black w-10 h-10  text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled('prev')}
          />
            
          <AiOutlineRight
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-black w-10 h-10 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            // disabled={isDisabled('next')}
          />
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {slides.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-[350px] h-[450px] snap-start"
              >
                <a
                  // href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.image || ''})` }}
                >
                  <img
                    src={resource.image || ''}
                    // alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                   <button className="text-black bg-white p-[5px] mt-[380px] px-3 mx-auto text-xl">
                    {resource.btn_text}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel2