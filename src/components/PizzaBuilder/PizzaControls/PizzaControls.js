import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";
import Button from "../../UI/Button/Button"

const PizzaControls = ({ addIngredient, removeIngredient }) => {
  const results = [];
  const ingredients = [
    "tomato",
    "salami",
    "greenOlive",
    "blackOlive",
    "redPepper",
    "yellowPepper",
  ];
  for (const ingredient in ingredients) {
    results.push(<PizzaControl
        key={ingredients[ingredient]}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredients[ingredient]} />)
  }

  return (
    <div className={classes.PizzaControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total}>Oreder</Button>
    </div>
  );
}

export default PizzaControls;