import { FC, useState } from "react";
import "./App.scss";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
};
