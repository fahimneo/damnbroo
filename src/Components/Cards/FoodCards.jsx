import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
const FoodCards = ({ handleFoodCard }) => {
  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((date) => setFoodCards(date));
    // console.log(foodCards);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {foodCards.map((foodCard, idx) => (
        <FoodCard
          handleFoodCard={handleFoodCard}
          key={idx}
          foodCard={foodCard}
        ></FoodCard>
      ))}
    </div>
  );
};

FoodCards.propTypes = {
  handleFoodCard: PropTypes.func.isRequired,
};
export default FoodCards;
