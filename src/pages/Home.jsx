import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import FoodItem from "../components/FoodItem";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
}
