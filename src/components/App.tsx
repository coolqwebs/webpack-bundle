import { FC, useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
        <hr />
        <Link to="/shop">Shop</Link>
        <hr />
        <Link to="/contacts">Contacts</Link>
      </div>
      <p className={classes.text}>{counter}</p>
      <button
        className={classes.button}
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        Click me!
      </button>
      <Outlet />
    </div>
  );
};
