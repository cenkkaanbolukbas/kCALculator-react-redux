/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { AddtoCart } from "../redux/cartSlice";

function Prep({ item }) {
  const dispatch = useDispatch();
  const { name, prt, carb, fat, kc, img } = item;

  return (
    <div className="border h-[350px] w-[300px] rounded-md flex flex-col items-center my-6  ">
      <div className="flex items-center justify-center text-3xl mt-3">
        {name}
      </div>
      <div className="flex w-full flex-wrap justify-center gap-4 mt-3 font-mono font-semibold ">
        <p>Prt: {prt} </p>
        <p>Carb: {carb}</p>
        <p>Fat: {fat}</p>
        <p>KC: {kc}</p>
      </div>
      <img className="w-full h-[180px] rounded-xl mt-3" src={img} alt="" />
      <button
        onClick={() => dispatch(AddtoCart(item))}
        className="border rounded-full w-40 h-10 hover:bg-red-400 hover:text-white mt-3 font-bold"
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default Prep;
