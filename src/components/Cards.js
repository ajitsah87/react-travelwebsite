import React from "react";

import MyApi from "../Hook/MyApi"; // Import MyApi component

function Cards() {
  return (
    <div className="bg-white ">
      <h1 className="text-4xl py-8 text-center">
        Check out these epic destinations!
      </h1>
      <div className="">
        {/* Use MyApi component to fetch and display data */}
        <MyApi  productAmount={8}/> 
      </div>
    </div>
  );
}

export default Cards;
