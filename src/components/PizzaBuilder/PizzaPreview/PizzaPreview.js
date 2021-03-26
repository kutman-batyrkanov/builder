import classes from "./PizzaPreview.module.css";
import PizzaControls from "../PizzaControls/PizzaControls";

const PizzaPreview = ({ ingredients }) => {
    const result =[]
    for(const  ingredient in ingredients){
        for(let i = 0; i < ingredients[ingredient]; i++){
            result.push(<PizzaControls type={ingredient}/>)
        }
    }
      return ( 
          <div className = {classes.PizzaPreview}>
              {result}
          </div>
      );
  }
  export default PizzaPreview;