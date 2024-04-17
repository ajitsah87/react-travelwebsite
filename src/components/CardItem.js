import React from "react";
import { Link } from "react-router-dom";

// props will be coming from Cards.js
function CardItem(props) {
  
  return (
    <>
 <Link to={props.path} className=" relative isolate flex  flex-row justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-full mx-auto mt-10  hover:scale-110 duration-300 max-lg:h-80">
 
    <img src={props.src} alt={props.src} className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    
    <div className="z-10 gap-y-1 overflow-hidden text-lg leading-6 font-bold text-gray-300">{props.location}</div>

 </Link>
    </>
  );
}

export default CardItem;
