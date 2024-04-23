import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Man() {
  const [kg, setKg] = useState(0);
  const [boy, setBoy] = useState(0);
  const [yas, setYas] = useState(0);
  const [bazal, setBazal] = useState(0);
  const [needKcal, setNeedKcal] = useState(0);
  const navigate = useNavigate();

  function inputKG(e) {
    setKg(e.target.value * 10);
  }
  function inputHeight(e) {
    setBoy(e.target.value * 6.25);
  }
  function inputAge(e) {
    setYas(e.target.value * 5 + 5);
    setBazal(kg + boy - yas + 62);
  }
  function calculate() {
    setNeedKcal(bazal + (bazal * 40) / 100);
  }

  return (
    
      <div className="border rounded-3xl bg-gray-300 top-[50%] left-[50%] h-[370px] w-[300px] -my-[175px] -mx-[150px] flex items-center justify-center absolute flex-col">
        <form className="flex items-center flex-col ">Enter KG:<input className="mt-1 rounded-md" onChange={inputKG} placeholder="  kg" /></form>
        <form className="flex items-center flex-col ">Enter Height:<input className="mt-1 rounded-md" onChange={inputHeight} placeholder="  cm" /></form>
        <form className="flex items-center flex-col ">Enter Age:<input className="mt-1 rounded-md" onChange={inputAge} placeholder="  older" /></form>
        <button className="border rounded-full p-2 mt-5 w-32  hover:bg-red-400 hover:text-white" onClick={calculate}>Hesapla</button>
        <div className="mt-3 text-2xl font-bold">Daily Need Kcal: {needKcal}</div>
        <button className="border rounded-full p-2 w-32 mt-3 hover:bg-red-400 hover:text-white" onClick={() => navigate("/foodmap")}>prep diet</button>
      </div>
    
  );
}

export default Man;
