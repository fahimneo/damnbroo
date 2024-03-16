import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
const FoodCards = () => {
  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((date) => setFoodCards(date));
    // console.log(foodCards);
  }, []);

  const handleFoodCard = () => {
    console.log("hiiiiiiiii", handleFoodCard);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      {foodCards.map((foodCard, idx) => (
        <FoodCard
          key={idx}
          foodCard={foodCard}
          handleFoodCard={handleFoodCard}
        ></FoodCard>
      ))}
    </div>
  );
};

export default FoodCards;
