// import PropTypes from "prop-types";
const Cart = () => {
  //   console.log(handleFoodCard);
  return (
    <div>
      {/* food cart */}
      <div className="border-2 rounded-xl text-xl font-semibold text-center">
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
                  <button className="btn  border-none  text-black     font-semibold bg-green-400 rounded-full ">
                    Explore Now
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  //   handleFoodCard: PropTypes.func.isRequired,
};
export default Cart;
