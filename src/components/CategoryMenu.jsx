import { useState, useEffect } from "react";
import FoodData from "./../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "./../redux/slices/CategorySlice";

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const categorySelector = useSelector((state) => state.category.category);

  const getCategories = () => {
    const unqCategories = [
      ...new Set(FoodData.map((category) => category.category)),
    ];
    setCategories(unqCategories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onHandleCategories = (category) => {
    dispatch(setCategory(category));
  };

  const onHandleAllCategories = () => {
    dispatch(setCategory("All"));
  };

  return (
    <div className="px-5 flex items-center lg:items-start flex-col gap-4 mb-5">
      <div>
        <h3 className="text-2xl font-semibold tracking-wide uppercase">
          Find the Best Food
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onHandleAllCategories()}
          className={`bg-slate-200 px-2 py-1 rounded font-semibold  text-md tracking-widest hover:bg-green-500 hover:text-white  ${
            categorySelector === "All" && "text-white bg-[red]"
          }`}
        >
          <h1>All</h1>
        </button>
        {categories.map((each_Category, index) => (
          <button
            onClick={() => onHandleCategories(each_Category)}
            key={index}
            className={`bg-slate-200 px-2 py-1 rounded font-semibold tracking-widest text-md hover:bg-green-600 hover:text-white ${
              categorySelector === each_Category && "text-white bg-[red]"
            }`}
          >
            <h1>{each_Category}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}
