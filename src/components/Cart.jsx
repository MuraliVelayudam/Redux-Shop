import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  console.log(cartItems);

  const onHandleCartClose = () => {
    setActiveCart((prev) => !prev);
  };

  const onHandleOpenCart = () => {
    setActiveCart((prev) => !prev);
  };

  const onHandleOpenCartEsc = (e) => {
    if (e.key === "Escape") {
      return setActiveCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onHandleOpenCartEsc);
    return () => document.removeEventListener("keydown", onHandleOpenCartEsc);
  }, []);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const onHandleCheckout = () => {
    toast.error("Add Items in Cart to Check-Out 🤗.");
    if (cartItems <= 0) {
      return;
    }

    navigate("/success");
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-[90vw] lg:w-[30vw] bg-white h-screen px-4  py-5 shadow-2xl border border-slate-100 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between">
          <span className="text-2xl lg:text-3xl  font-extralight tracking-widest">
            My Orders
          </span>
          <span
            className="border border-slate-300 p-1 text-xs rounded-md cursor-pointer hover:border-red-700 hover:border-1"
            onClick={onHandleCartClose}
          >
            ❌
          </span>
        </div>
        <hr className="mt-4" />

        <div className="mt-3 ">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </>
          ) : (
            <div className=" h-[60vh] flex items-center justify-center animate-pulse">
              <h1 className="text-xl tracking-widest font-extralight uppercase  py-4 px-2 ">
                No Items in Cart
                <span className="text-3xl bg-slate-100 p-1 rounded-full flex items-center justify-center mt-2">
                  🛒
                </span>
              </h1>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 px-8 py-5 flex flex-col  gap-5 justify-center w-full">
          <div className="flex flex-col  tracking-wider gap-2">
            <p className="font-semibold">
              Items : <span>{totalQty}</span>
            </p>
            <p className="font-semibold">
              Total Amount : ₹{" "}
              <span className="text-green-700">{totalPrice}</span>
            </p>
          </div>
          <hr />
          <div className="flex items-center justify-center">
            <button
              onClick={onHandleCheckout}
              className="bg-green-600 text-white hover:bg-green-500 px-3 py-2 font-semibold  rounded-lg w-full  tracking-widest "
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 lg:m-6 m-4 cursor-pointer ${
          cartItems.length > 0
            ? "animate-bounce delay-500 transition-all"
            : "animate-none"
        }`}
        onClick={onHandleOpenCart}
        onKeyDown={onHandleOpenCartEsc}
      >
        <span className="text-2xl lg:text-3xl bg-slate-950 rounded-full p-2 relative">
          🛒
          <span className="absolute lg:-top-6 -top-5 left-7  bg-red-700 text-white lg:px-3 px-2 py-1 rounded-full text-xs">
            {totalQty}
          </span>
        </span>
      </div>
    </>
  );
}
