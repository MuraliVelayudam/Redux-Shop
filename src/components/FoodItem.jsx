import FoodCard from "./FoodCard";
import FoodData from "./../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function FoodItem() {
  const onSuccessHandle = (message) => {
    toast.success(message);
  };

  const categorySelector = useSelector((state) => state.category.category);
  const searchSelector = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-3 flex flex-col lg:flex-row md:flex-row items-center flex-wrap justify-center lg:justify-center xl:justify-start  mb-10 ">
        {FoodData.filter((food) => {
          if (categorySelector === "All") {
            return food.name
              .toLowerCase()
              .includes(searchSelector.toLowerCase());
          } else {
            return (
              categorySelector === food.category &&
              food.name.toLowerCase().includes(searchSelector.toLowerCase())
            );
          }
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              food={food}
              onSuccessHandle={onSuccessHandle}
            />
          );
        })}
      </div>
    </>
  );
}
