import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import aldo from '../../../images/aldo.png'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import {initalState, mens} from "./data";

const Carou = () => {
    const [cards, setCards] = useState(initalState);
	return (
        <div className="ml-[250px] h-[680px] mr-[250px] items-center justify-center bg-black">
            <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={90}
        totalSlides={9}
        visibleSlides={4}
        infinite={true}
      >
        <Slider className="p-10">
        <div className="flex items-center justify-between">
            <ButtonBack className="bg-white text-black ml-[-38px]"><AiOutlineLeft /></ButtonBack>
            <ButtonNext className="bg-white text-black "><AiOutlineRight /></ButtonNext>
        </div>
        {cards.map((card,i) => (
          <Slide key={i} index={0}>
        <Card image={card.image} desc={card.desc} cost={card.cost} />
          </Slide>
            ))}
           
          {/*<Slide index={1}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={2}>
          <img src={aldo} className="w-[250px] bg-white"/>
          
          </Slide>
          <Slide index={3}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={4}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={5}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={6}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={7}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>
          <Slide index={8}>
          <img src={aldo} className="w-[250px] bg-white"/>
          </Slide>*/}
          
        </Slider>
        
        
      </CarouselProvider>
        </div>
		
	)
}

export default Carou