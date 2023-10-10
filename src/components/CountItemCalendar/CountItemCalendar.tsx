import React, { memo } from "react";
import { motion } from "framer-motion";

import styles from "./CountItemCalendar.module.scss";

interface CountItemCalendarProps {
  number: number;
  text: string;
}

const CountItemCalendar: React.FC<CountItemCalendarProps> = ({ number, text }) => {
  const prevNum = (num: number): number => {
    if (num === 59) {
      return 0;
    } else {
      return num + 1;
    }
  };

  return (
    <motion.div className={styles.countItemCalendar}>
      <div className={styles.count}>
        <div className={styles.top}>{number < 10 ? `0${number}` : number}</div>
        <div className={styles.bottom}>{prevNum(number) < 10 ? `0${prevNum(number)}` : prevNum(number)}</div>
        <motion.div
          key={Math.random() + text}
          animate={{ rotateX: "90deg" }}
          initial={{ rotateX: "0deg" }}
          transition={{ delay: 0, duration: 0.3 }}
          className={styles.upperFlip}
        >
          {prevNum(number) < 10 ? `0${prevNum(number)}` : prevNum(number)}
        </motion.div>
        <motion.div
          key={Math.random() + text}
          animate={{ rotateX: "0deg" }}
          initial={{ rotateX: "90deg" }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className={styles.lowerFlip}
        >
          {number < 10 ? `0${number}` : number}
        </motion.div>
      </div>
      <p className={styles.text}>{text}</p>
    </motion.div>
  );
};

export const MemoizedCountItemCalendar = memo(CountItemCalendar);
