import { useDispatch, useSelector } from "react-redux";
import { ClearCart, RemoveToCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { carts, totalprt, totalcarb, totalfat, totalkc } = useSelector(
    (state) => state.carts
  );
  return (
    <div>
      <div className="absolute right-0 top-0 h-full w-3/12 bg-gray-500 items-center flex-col flex">
        <div className="font-bold text-3xl">SEPETs</div>
        {carts.map((item, i) => (
          <div
            className="flex justify-between items-center  w-full  h-[100px] p-5 mt-10"
            key={i}
          >
            <div>
              <img className="w-[100px] rounded-full" src={item.img} alt="" />
            </div>
            <div className="font-bold text-2xl text-red-400">{item.name}</div>
            <div className="flex flex-col ">
              <div className="text-xs">Protein : {item.prt}</div>
              <div className="text-xs">Carb : {item.carb}</div>
              <div className="text-xs">Fat : {item.fat}</div>
              <div className="text-xs">Kcal : {item.kc}</div>
              <div className="text-xs">Amount : {item.amount}</div>
            </div>
            <div>
              <button
                className="font-extrabold text-red-400"
                onClick={() => dispatch(RemoveToCart(item))}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div>
          <button
            className="w-[200px] h-[50px] border rounded-full hover:bg-red-400 text-white"
            onClick={() => dispatch(ClearCart())}
          >
            Clear Cart
          </button>
        </div>
        <div className="bottom-0 absolute right-0 font-semibold text-2xl">
          <div>Total Prt : {totalprt}</div>
          <div>Total Carb : {totalcarb}</div>
          <div>Total Fat : {totalfat}</div>
          <div>Total Kcal : {totalkc}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
