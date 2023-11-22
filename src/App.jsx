import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

export default function App() {
  const [foods, setFoods] = useState(foodsJson);

  // Test:
  // const testFood = {
  //   name: "Orange",
  //   calories: 85,
  //   image: "https://i.imgur.com/abKGOcv.jpg",
  //   servings: 1
  // }

  const deleteFood = (index) => {
    const updateFoods = [...foods];
    updateFoods.splice(index, 1);
    setFoods(updateFoods)
  };

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />

      <hr />
      
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} removeFood={() => deleteFood(index)}/>
      ))}
    </div>

  );
}


