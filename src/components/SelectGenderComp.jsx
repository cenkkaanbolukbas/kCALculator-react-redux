import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectGenderComp() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");

  
   console.log(gender)
   if (gender === "man") {
    navigate("/man")
  }else if(gender === "woman"){
    navigate("/woman")
  }
  
  return (
    <div className="absolute top-[50%] left-[50%]  w-[240px] h-[240px] -my-[120px] -mx-[120px] flex items-center justify-center">
      <div onChange={(e)=>setGender(e.target.value)}  className="">
        <select className="w-80 text-xl h-10 " name="" id="" > 
        <option  value="">Select Gender</option>
          <option value="man">Man</option>
          <option  value="woman">Woman</option>
        </select>
      </div>
    </div>
  );
}

export default SelectGenderComp;

