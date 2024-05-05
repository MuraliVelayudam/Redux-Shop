/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "./../redux/slices/CartSlice";

export default function FoodCard({ food, onSuccessHandle }) {
  const { desc, img, name, price, rating, id } = food;

  const dispatch = useDispatch();

  const onHandleAddToCart = ({ id, img, name, price, rating, qty }) => {
    dispatch(addToCart({ id, img, name, price, rating, qty }));
    onSuccessHandle(`Added ${name} in Cart`);
  };

  return (
    <div className="p-4 lg:w-[350px]  md:w-[340px] w-80  flex flex-col m-2 gap-3  rounded-md border border-slate-100  shadow-md">
      <div className="flex items-center justify-center">
        <img
          src={img}
          alt={name}
          className="h-24 w-auto hover:scale-110 cursor-grab transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold">{name}</p>
        <p className="text-green-600 font-bold">
          <span>₹</span>
          <span>{price}</span>
        </p>
      </div>
      <div>
        <p className="text-xs text-slate-700">{desc.slice(0, 45)}...</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          ⭐<span className="font-semibold">{rating}</span>
        </div>
        <button
          onClick={() =>
            onHandleAddToCart({ id, img, name, price, rating, qty: 1 })
          }
          className="bg-green-500 px-2 py-2 hover:bg-green-600 text-white font-semibold text-xs uppercase rounded tracking-widest"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
