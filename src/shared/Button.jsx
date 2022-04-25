import classes from './Button.module.css';

const Button = props => {  
  return (
    <div className={classes.button}>
      <button type={props.type}>{props.children}</button>
    </div>
  );
};

export default Button;


