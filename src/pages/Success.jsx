import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

export default function Success() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex h-[100vh] justify-center items-center">
      {loader ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="flex items-center justify-center flex-col gap-3">
          <h1 className="text-2xl lg:text-3xl font-extralight  animate-pulse">
            Order Successful . . . !
          </h1>
          <p className="font-semibold text-xl">
            🛒 Your Order Successfully Placed
          </p>
          <Link to={"/"} className="underline underline-offset-8">
            Home 🏠
          </Link>
        </div>
      )}
    </div>
  );
}
