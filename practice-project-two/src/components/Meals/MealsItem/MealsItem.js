import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {

    const price = `$${props.price}`;

    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {price}
            </div>
            <div>
                <MealsItemForm />
            </div>
        </li>
    );
};

export default MealsItem;