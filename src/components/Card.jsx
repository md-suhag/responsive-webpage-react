import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-full p-2 py-4 bg-slate-100">
      <img
        className="max-w-full aspect-video object-cover"
        src={image}
        alt=""
      />
      <h3 className="font-bold text-2xl text-[#222]">{title}</h3>
      <p className="text-[#444]">{description}</p>
    </div>
  );
};

export default Card;
