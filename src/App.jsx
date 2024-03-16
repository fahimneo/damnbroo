import "./App.css";
import Banner from "./Components/Banner/Banner";

import FoodCards from "./Components/Cards/FoodCards";
import Cart from "./Components/Cart/Cart";
import Carts from "./Components/Carts/Carts";
import Navbar from "./Components/navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [foodCards, setFoodCards] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((date) => setFoodCards(date));
    // console.log(foodCards);
  }, []);

  const [addCarts, setAddCarts] = useState([]);
  const handleFoodCard = (data) => {
    const isExist = addCarts.find((p) => p.recipe_id == data.recipe_id);
    // console.log(data.recipe_id);
    if (!isExist) {
      setAddCarts([...addCarts, data]);
    } else {
      alert("Already in cart");
    }
  };

  const handlePreparing = () => {
    console.log("hiiiiiiii", handlePreparing);
  };
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="text-center">
          <h3>Our Recipes</h3>
          <p>
            Explore Our Recipes, your culinary companion for delicious dishes.
            Discover diverse flavors, simple recipes, and culinary inspiration
            for every occasion.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 container mx-auto">
          <FoodCards
            foodCards={foodCards}
            handleFoodCard={handleFoodCard}
            className=""
          ></FoodCards>

          <div className="flex-1 border-2 rounded-xl">
            <Carts addCarts={addCarts}></Carts>
            <Cart addCarts={addCarts} handlePreparing={handlePreparing}></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
