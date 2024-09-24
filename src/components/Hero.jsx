import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center min-h-[90vh] bg-hero-bg bg-cover ">
      <div className=" text-center bg-white p-3 m-3 opacity-50 md:opacity-100 rounded  md:bg-transparent">
        <h1 className="text-3xl md:text-6xl uppercase font-bold mb-3">
          Welcome to Beautiful website
        </h1>
        <p className="max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos sint magni maxime architecto error minima doloremque id
          voluptatum.
        </p>
      </div>
    </section>
  );
};

export default Hero;
