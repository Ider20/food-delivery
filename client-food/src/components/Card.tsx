import React from "react";

type CardProps = {
  img: string;
  title?: string;
  price: number;
  handleClick?: () => void;
};

// interface CardProps {
//   img: string;
//   title: string;
//   price: number;
// }

const Card = ({ img, title, price }: CardProps) => {
  return (
    <div className="">
      <div>
        <img src={img} alt="" />
        <div className="px-3 font-bold">
          <p className="text-black">{title}</p>
          <p className="text-green-500">{price}₮</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
