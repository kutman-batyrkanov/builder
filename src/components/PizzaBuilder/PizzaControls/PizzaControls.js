import classes from "./PizzaControls.module.css";

const PizzaControls  = ({ ingredients, }) => {
    const results = [];
    for (const ingredient in ingredients) {
        results.push(ingredient);
    }

    return ( 
    <div className={classes.PizzaControls}>results</div> 
    );
}
 
export default PizzaControls ;