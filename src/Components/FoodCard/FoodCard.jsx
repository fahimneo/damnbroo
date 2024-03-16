import { useEffect } from "react";
import { useState } from "react";

const FoodCard = () => {
  const [foodCards, setFoodCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((date) => setFoodCards(date));
    console.log(foodCards);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex ">
        {/* food card */}
        <div className=" ">
          <h1>card:{foodCards.length}</h1>
          {
            foodCards.map(foodCard =>)
          }
          <div className="border-2 w-96 bg-base-100 shadow-xl p-6 rounded-2xl">
            <figure>
              <img
                className="rounded-2xl max-h-52"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="">
              <h2 className="text-xl font-semibold mt-6 mb-4">
                Spaghetti Bolognese
              </h2>
              <p className="opacity-75 ">
                Classic Italian pasta dish with savory meat sauce.
              </p>
              <div className="border-b-2 mt-4 mb-6"></div>
              <h3 className=" mb-4">Ingredients: 6</h3>
              <ul className=" opacity-75 grid gap-2">
                <li>500g ground beef</li>
                <li>500g ground beef</li>
                <li>500g ground beef</li>
              </ul>
              <div className="border-b-2 mt-4 mb-6"></div>
              <div className=" flex gap-4 mb-6">
                <p>
                  <i class="fa-regular fa-clock mr-2"></i>30 minute
                </p>
                <p>
                  <i class="fa-solid fa-fire-flame-curved mr-2"></i>600 calories
                </p>
              </div>
              <div className="">
                <button className=" border-none px-9 text-black  py-4 text-xl  font-medium bg-green-400 rounded-full ">
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* food cart */}
        <div className="border-2 text-2xl font-semibold text-center">
          <div className="mt-8">
            <h3>Want to cook:01</h3>
            <div className="border-b-2 mt-4 mb-6"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="font-medium opacity-75">
                  <th></th>
                  <th>Name</th>
                  <th>time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>1</th>
                  <td className="opacity-60">Cy Ganderton</td>
                  <td className="opacity-60">Quality Control Specialist</td>
                  <td className="opacity-60">Blue</td>
                  <th>
                    <button className=" border-none px-9 text-black  py-4 text-xl  font-semibold bg-green-400 rounded-full ">
                      Explore Now
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
