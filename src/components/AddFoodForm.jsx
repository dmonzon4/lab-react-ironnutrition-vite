// Your code here

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";

export default function AddFoodForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [servingsValue, setServingsValue] = useState(0);

  const handleNameChange = (event) => {
    setNameValue(event.target.value.toUpperCase());
  };

  const handleImageChange = (event) => {
    setImageValue(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCaloriesValue(event.target.value);
  };

  const handleServingsChange = (event) => {
    setServingsValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameValue === "" || imageValue === "" || caloriesValue === 0 || servingsValue === 0) {
      alert("Todos los campos son requeridos");
      return;
    }

  const newFood = {
    name: nameValue,
    image: imageValue,
    calories: caloriesValue,
    servings: servingsValue,
  };

  const updatedFoods = [...props.foods];
    updatedFoods.push(newFood);
    props.setFoods(updatedFoods);
};


  return (
    <Form onSubmit={handleSubmit}>
      <h3>Add Food Entry</h3>
      <Form.Label htmlFor="name">Nombre: </Form.Label>
      <Form.Control
        type="text"
        name="name"
        onChange={handleNameChange}
        value={nameValue}
        required
      />
      <br />
      <Form.Label htmlFor="image">Imagen: </Form.Label>
      <Form.Control
        type="text"
        name="image"
        onChange={handleImageChange}
        value={imageValue}
        required
      />
      <br />
      <Form.Label htmlFor="calories">Calorías: </Form.Label>
      <Form.Control
        type="number"
        name="calories"
        onChange={handleCaloriesChange}
        value={caloriesValue}
        required
      />
      <br />
      <Form.Label htmlFor="servings">Porciones: </Form.Label>
      <Form.Control
        type="number"
        name="servings"
        onChange={handleServingsChange}
        value={servingsValue}
        required
      />
      <br />
      <Button type="submit" variant="success">
        Create
      </Button>
    </Form>
  );
}

