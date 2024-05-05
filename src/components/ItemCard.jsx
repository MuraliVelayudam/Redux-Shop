/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "./../redux/slices/CartSlice";
import toast from "react-hot-toast";

export default function ItemCard({ item }) {
  const { img, price, name, qty, id } = item;
  const dispatch = useDispatch();

  const onHandleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
    toast(`${name} Removed in Cart`, {
      icon: "👋",
    });
  };

  const onIncreaseQty = (id) => {
    dispatch(incrementQty(id));
  };

  const onDecreaseQty = (id) => {
    if (qty <= 1) {
      return;
    }
    dispatch(decrementQty(id));
  };

  return (
    <div className="border border-slate-200 rounded-md shadow-lg flex gap-2 px-3 py-2 items-center justify-center mb-2 leading-5">
      <div>
        <img src={img} alt={name} className="h-12" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between ">
          <span className="font-semibold text-sm lg:text-base lg:tracking-wider">
            Onion Pizza
          </span>
          <span
            onClick={() => onHandleRemoveCart({ id })}
            className="lg:text-sm text-base border p-1 border-slate-300 rounded-full bg-slate-50 hover:border-red-700 cursor-pointer transition-all duration-300 ease-in-out"
          >
            🗑
          </span>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm lg:text-base lg:tracking-wider">
            Price : ₹ <span className="text-green-700">{price * qty}</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDecreaseQty({ id })}
              className="border border-slate-400 px-2 rounded hover:bg-red-700 hover:text-white transition-all duration-300 ease-in-out"
            >
              -
            </button>
            <span>{qty}</span>
            <button
              onClick={() => onIncreaseQty({ id })}
              className="border border-slate-400 px-2 rounded hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
