import "./App.css";
import Banner from "./Components/Banner/Banner";
import FoodCard from "./Components/FoodCard/FoodCard";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <FoodCard></FoodCard>
      </div>
    </>
  );
}

export default App;
