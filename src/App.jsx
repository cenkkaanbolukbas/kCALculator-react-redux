import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectGenderComp from "./components/SelectGenderComp";
import BackgroundComp from "./components/BackgroundComp";
import Man from "./components/gender/Man";
import Woman from "./components/gender/Woman";
import FoodMap from "./components/FoodMap";

export default function App() {
  return (
    <div>
      <Router>
        <BackgroundComp />
        <Routes>
          <Route path="/" element={<SelectGenderComp />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/foodmap" element={<FoodMap />} />
        </Routes>
      </Router>
    </div>
  );
}
