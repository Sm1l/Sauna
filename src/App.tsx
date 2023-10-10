import React from "react";
import styles from "./App.module.scss";
import { MainContainer } from "./components/MainContainer";

interface MainProps {}

const App: React.FC<MainProps> = () => {
  return (
    <div className={styles.app}>
      <MainContainer />
    </div>
  );
};

export { App };
