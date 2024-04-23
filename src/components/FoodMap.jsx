import Product from "../products.json";
import Prep from "./Prep";
import Cart from "./Cart";

function FoodMap() {
  const foods = Product.map((item) => 
  <Prep key={item.id} item={item} />);

  return (
    <div>
      <div className=" flex flex-wrap items-center left-20 justify-between absolute w-2/3 h-full top-0 p-3 ">
        {foods}
      </div>
      <Cart />
    </div>
  );
}

export default FoodMap;
