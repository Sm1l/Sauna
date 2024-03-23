import React from "react";

import styles from "./MainContainer.module.scss";
import { Main } from "../Main";
import { Footer } from "../Footer";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  return (
    <div className={styles.mainContainer}>
      <Main />
      <Footer />
    </div>
  );
};

export { MainContainer };
