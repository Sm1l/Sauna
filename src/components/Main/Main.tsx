import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Main.module.scss";
import { CountContainer } from "../CountContainer";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  };

  const finalDate = +new Date("2023 Nov 17 17:40:00");
  const dateFormat = new Intl.DateTimeFormat("ru", dateOptions);

  // const finalDate = +new Date("2024 Jan 1 00:00:00");
  const [countIsVisible, setCountIsVisible] = useState(true);

  useEffect(() => {
    setCountIsVisible(finalDate > Date.now());
  }, []);

  return (
    <main className={styles.main}>
      {countIsVisible ? (
        <motion.div
          initial={{ y: "-1000px" }}
          animate={{ y: "0px" }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className={styles.container}
        >
          <p className={styles.text}>
            {/* В ожидании ноябрьского похода в баню! <br /> А пока вот вам счетчик до Нового Года: */}
            Ноябрьский поход в баню состоится <br />
            <span className={styles.colorSpan}>{dateFormat.format(finalDate)}</span>
          </p>
          <h1 className={styles.title}>До встречи в бане осталось:</h1>
        </motion.div>
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
