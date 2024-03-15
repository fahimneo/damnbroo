const FoodCard = () => {
  return (
    <div className="container mx-auto">
      <div className=" ">
        {/* food card */}
        <div className="  ">
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
        <div></div>
      </div>
    </div>
  );
};

export default FoodCard;
