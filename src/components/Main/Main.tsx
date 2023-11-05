import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Main.module.scss";
import { CountContainer } from "../CountContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  // const finalDate = +new Date("2023 Nov 17 18:30:00");
  const finalDate = +new Date("2024 Jan 1 00:00:00");
  const [countIsVisible, setCountIsVisible] = useState(true);

  useEffect(() => {
    setCountIsVisible(finalDate > Date.now());
  }, []);

  return (
    <main className={styles.main}>
      {countIsVisible ? (
        <motion.h1
          initial={{ y: "-1000px" }}
          animate={{ y: "0px" }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className={styles.title}
        >
          В ожидании ноябрьского похода в баню! <br /> А пока вот вам счетчик до Нового Года:
          {/* До встречи в бане осталось: */}
        </motion.h1>
      ) : (
        <AnimatePresence>
          <motion.h1
            initial={{ y: "-1000px" }}
            animate={{ y: "0px" }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className={styles.title}
          >
            Эй! Ты почему еще не в бане?
          </motion.h1>
        </AnimatePresence>
      )}
      {countIsVisible && <CountContainer finalDate={finalDate} setCountIsVisible={setCountIsVisible} />}
    </main>
  );
};

export { Main };
