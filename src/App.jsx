import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import FoodCards from "./Components/Cards/FoodCards";
import Navbar from "./Components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [addCarts, setAddCarts] = useState([]);
  const handleFoodCard = (data) => {
    const newCart = [...addCarts, data];
    setAddCarts(newCart);
    console.log(data);

    // console.log("hiiiiiiiii", handleFoodCard);
  };
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="flex gap-6 container mx-auto">
          <FoodCards handleFoodCard={handleFoodCard} className=""></FoodCards>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
