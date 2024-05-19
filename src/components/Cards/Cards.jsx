import React from "react";


const Cards = (props) => {
  return (
    <>
      <div className={`shadow-md bg-GreenLight rounded-xl p-6 max-w-md w-[324px] h-36 text-center  ${props.cardClassName}` }>
        <h2 className="text-lg font-bold mb-4">{props.title}</h2>
        <p className="text-3xl font-bold">{props.description}</p>
      </div>
    </>
  );
};


export default Cards;
