import React, { useState } from "react";
import Card from "./Card";
import {initalState, mens, sales} from "./data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



const Carousel1 = ({category}) => {
	const [cards, setCards] = useState(initalState);
  const [cardsmen, setCardsmen] = useState(mens);
  const [sale, setSale] = useState(sales)

  const handleLeftClick = (cards) => {
    let prevState = [...cards]
    
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

    // reset
    prevState.find((f) => f.active === false).active = true ;

    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos = Math.max.apply(null, prevState.map((o) => {return o.pos;})) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = (cards) => {
    let prevState = [...cards]
     
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
    <div className="mb-[100px]">

    		 <div className="flex flex-wrap items-center justify-center md:p-[5px] md:mb-[10px] md:gap-8 gap-6  w-screen">
    	<AiOutlineLeft 
        className="text-xl md:text-2xl cursor-pointer"
        onClick={() => category === "women" ? handleLeftClick(cards) : (category === "men" ? handleLeftClick(cardsmen) : handleLeftClick(sale))}
        />
       { category === "women" ? (<div className="flex flex-wrap items-center justify-center md:p-[5px] md:mb-[10px] md:gap-8 gap-4">
         {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card 
          key={index} 
          image={card.image} 
          desc={card.desc}
           cost={card.cost}
           />
        ))}
       </div>) : (
        
        category === "men" ? (
          <div className="flex flex-wrap items-center justify-center md:p-[5px] md:mb-[10px] md:gap-8 gap-4">
         {cardsmen
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card 
          key={index} 
          image={card.image} 
          desc={card.desc}
           cost={card.cost}
           />
        ))}

       </div>
        ):(
          <div className="flex flex-wrap items-center justify-center md:p-[5px] md:mb-[10px] md:gap-8 gap-4">
         {sale
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <Card 
          key={index} 
          image={card.image} 
          desc={card.desc}
           cost={card.cost}
           />
        ))}

       </div>
        )

       )}
      
      <AiOutlineRight
        className="text-xl md:text-2xl cursor-pointer"
        onClick={() => category === "women" ? handleRightClick(cards) : (category === "men" ? handleRightClick(cardsmen) : handleRightClick(sale))}
        />
    </div>
    	
    </div>
   
      
    </>
  );
}

export default Carousel1