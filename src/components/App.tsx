import { FC, useState } from "react";
import classes from "./App.module.scss";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <h1 className={classes.text}>{counter}</h1>
        <h1>Da nu neet</h1>
      </div>
      <button
        className={classes.button}
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};
