import React from "react";
import Card from "./Card";
import cardImg1 from "../assets/card-img1.jpg";
import cardImg2 from "../assets/card-img2.jpg";
import cardImg3 from "../assets/card-img3.jpg";
import cardImg4 from "../assets/card-img4.jpg";

const cardsData = [
  {
    title: "Card Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo. Eius excepturi nesciunt vel deleniti?",
    image: cardImg1,
  },
  {
    title: "Card Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo. Eius excepturi nesciunt vel deleniti?",
    image: cardImg2,
  },
  {
    title: "Card Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo. Eius excepturi nesciunt vel deleniti?",
    image: cardImg3,
  },
  {
    title: "Card Title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nemo. Eius excepturi nesciunt vel deleniti?",
    image: cardImg4,
  },
];

const CardSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto p-4 py-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default CardSection;
