import Link from "next/link";
import classes from "../UI/button.module.css";
function Button(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>
        {props.children}
        </a>
    </Link>
  );
}

export default Button;
