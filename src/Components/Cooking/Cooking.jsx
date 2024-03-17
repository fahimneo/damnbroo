import PropTypes from "prop-types";

const Cooking = ({ cooking, time, calories }) => {
  // console.log(time);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {cooking.map((cook, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{cook.recipe_name}</td>
                  <td>{cook.preparing_time}</td>
                  <td>{cook.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="font-medium mr-5 opacity-90 mt-5">
            <div className="flex gap-5 justify-end">
              <h4>Total Time= </h4>
              <h4>Total Calories= </h4>
            </div>
            <div className="flex gap-5 justify-end mr-[50px] mt-2">
              <h4 className="">{time} minutes </h4>
              <h4>calories {calories}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  cooking: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};

export default Cooking;
