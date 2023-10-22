import classes from "../styles/Card.module.css";

// Card item contains the styling related to a single card item.
// [TODO] move cards within the item to further modularize code.
const CardItem = (props) => {
  return (
    <section id={props.name} className={`${classes.card}`}>
      {props.children}
    </section>
  );
};

export default CardItem;
