import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import FoodCards from "./Components/Cards/FoodCards";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        {/* <FoodCard></FoodCard> */}
        <div className="flex gap-6 container mx-auto">
          <FoodCards className=""></FoodCards>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
