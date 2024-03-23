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

  const finalDate = +new Date("2024 Mar 27 18:45:00");
  // const finalDate = +new Date("2024 Jan 1 00:00:00");
  const dateFormat = new Intl.DateTimeFormat("ru", dateOptions);

  const [countIsVisible, setCountIsVisible] = useState(true);

  useEffect(() => {
    setCountIsVisible(finalDate > Date.now());
  }, []);

  return (
    <main className={styles.main}>
      {countIsVisible ? (
        <>
          <motion.div
            initial={{ y: "-1000px" }}
            animate={{ y: "0px" }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className={styles.container}
          >
            <p className={styles.text}>
              {/* В ожидании декабрьского похода в баню! <br /> А до Нового Года осталось: <br /> */}
              Мартовский поход в баню состоится <br />
              <span className={styles.colorSpan}>{dateFormat.format(finalDate)}</span>
              {/* <p className={styles.colorSpan}>Внимание! Встреча в высшем разряде! </p> */}
            </p>
            <h1 className={styles.title}>До встречи в бане осталось:</h1>
          </motion.div>
          <CountContainer finalDate={finalDate} setCountIsVisible={setCountIsVisible} />
        </>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ y: "-1000px" }}
            animate={{ y: "0px" }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className={styles.container}
          >
            <h1 className={styles.title}>Эй! Ты почему еще не в бане?</h1>
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
};

export { Main };
