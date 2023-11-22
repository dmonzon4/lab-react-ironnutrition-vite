// Your code here

export default function FoodBox({ food, removeFood }) {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDelete = () => {
    // console.log("Delete button clicked");
    removeFood();
  };

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} style={{ width: "200px", height: "auto" }} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories}</b> kcal
      </p>
      <button onClick={handleDelete}>Delete</button>
      {/* <button>Delete</button> */}
    </div>
  );
}
