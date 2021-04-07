import classes from "./PizzaBuilder.module.css";
import { useState } from "react";
import PizzaControls from "./PizzaControls/PizzaControls";
import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControl from "./PizzaControls/PizzaControl/PizzaControl";
import Modal from "../UI/Modal/Modal";


const PizzaBulider = () => {
    const [ingredients, setIngredients] = useState ({
        tomato: 1,
        salami: 1,
        greenOlive: 1,
        blackOlive: 1,
        redPepper: 1,
        yellowPepper: 1,
    });

    function addIngredient(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]++;
        setIngredients(newIngredients);
    }
    
    function removeIngredient(type) {
        const newIngredients = { ...ingredients };
        newIngredients[type]--;
        setIngredients(newIngredients);
    }
    return ( 
    <div className={classes.PizzaBulider}>
        <PizzaControls ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />
        <PizzaPreview ingredients={ingredients} />
        <PizzaControl />
        <Modal>Hello</Modal>
    </div> 
    );
}
 
export default PizzaBulider;