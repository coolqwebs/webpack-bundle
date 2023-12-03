import { FC, useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import pngImg from "@/assets/spider-man.png";
import jpgImg from "@/assets/dennis.jpg";
import SvgComponent from "@/assets/man-in-sofa.svg";

interface AppProps {}

const leg = (arm: string): void => {
  console.log(arm);
};

export const App: FC<AppProps> = () => {
  const [counter, setCounter] = useState(0);

  if (PLATFORM === "desktop") {
    return <div>desktop</div>;
  }
  if (PLATFORM === "mobile") {
    return <div>mobile</div>;
  }
  return (
    <div>
      <h1>{PLATFORM}</h1>
      <img src={pngImg} alt="lol" />
      <img width={450} height={600} src={jpgImg} alt="kek" />
      <SvgComponent
        alignmentBaseline="mathematical"
        width={100}
        height={100}
        color={"red"}
      />
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
