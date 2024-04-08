import { Link } from "react-router-dom";
import classes from "./styles.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h1>Mern Blog App</h1>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
