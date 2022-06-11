import React, {useState} from 'react'


const Card = ({ image, desc, cost }) => {
	
  return (
    <div
      className="
         w-[150px] h-[350px] bg-white  md:w-[300px] md:h-[600px] md:bg-white
        drop-shadow-md	
        rounded-md
        "

    >
      <div  className="flex">
      <div className="flex flex-col">
      	<img src={image} className="w-full top-0 md:h-[450px] h-[230px]"/>
      	<div className="flex items-center justify-center p-4 flex-col">
      		<h4 className="md:text-[15px] text-center text-[13px] p-2">{desc}</h4>
        <p className="md:text-[17px] text-[15px] p-2">{cost}</p>
      	</div>
      	
      </div>
      </div>
    </div>
  );
}

export default Card