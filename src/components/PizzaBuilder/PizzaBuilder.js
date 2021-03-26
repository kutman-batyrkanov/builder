import classes from "./PizzaBuilder.module.css";
import { useState } from "react";
import PizzaControls from "./PizzaControls/PizzaControls";

const PizzaBulider = () => {
    const [ingredients, setIngredients] = useState ({
        tomato: 20,
        salami: 20,
        greenOlive: 20,
        blackOlive: 20,
        redPepper: 20,
        yellowPepper: 15,
    })
    return ( 
    <div className={classes.PizzaBulider}>
        <PizzaControls ingredients={ingredients} />
    </div> 
    );
}
 
export default PizzaBulider;