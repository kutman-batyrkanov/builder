import classes from "./PizzaControl.module.css";

const PizzaControl = ({ type, addIgredient, removeIgredient }) => {
    return ( 
    <div className={classes.PizzaControl}>
        <button onClick={() => addIgredient(type)}>+</button>
        <button onClick={() => removeIgredient(type)}>-</button>
    </div> 
    );
}
 
export default PizzaControl;