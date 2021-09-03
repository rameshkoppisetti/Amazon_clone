import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { Router } from "../../../whatsapp-clone/whatsapp-clone/node_modules/next/router";
const MAX_RATING = 5;
const MIN_RATING = 3;
function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    //Sending the product as an action to REDUX store...
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs mt-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 100} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime banner"
          />
          <p className="text-xs text-gray-500">Free Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
