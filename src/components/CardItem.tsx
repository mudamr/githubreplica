import classes from "../styles/Card.module.css";

const CardItem = (props) => {
  return (
    <section id={props.name} className={`${classes.card}`}>
      {props.children}
    </section>
  );
};

export default CardItem;
