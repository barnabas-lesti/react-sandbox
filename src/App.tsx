import clsx from "clsx";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <h1 className={clsx(styles.header, "text-3xl font-bold")}>Hello World!</h1>
    </>
  );
}
