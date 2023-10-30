import React from "react";
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

  const singleNumber = (num: number) => {
    if (num < 10) return `0${num}`;
    else {
      return num;
    }
  };

  const formatter = new Intl.NumberFormat("ru", {
    style: "unit",
    unit: text,
    unitDisplay: "long",
  });

  const getDHMS = (num: number): string => {
    const dhmsNoNumber: string = formatter.format(num).replace(/[0-9]/g, "");
    return dhmsNoNumber;
  };
  const dhms: string = getDHMS(number);

  //! useMemo?

  return (
    <motion.div className={styles.countItemCalendar}>
      <div className={styles.count}>
        <div className={styles.top}>{singleNumber(number)}</div>
        <div className={styles.bottom}>{singleNumber(prevNum(number))}</div>
        <motion.div
          key={number + text + 0}
          animate={{ rotateX: "90deg" }}
          initial={{ rotateX: "0deg" }}
          transition={{ delay: 0, duration: 0.3 }}
          className={styles.upperFlip}
        >
          {singleNumber(prevNum(number))}
        </motion.div>
        <motion.div
          key={number + text + 1}
          animate={{ rotateX: "0deg" }}
          initial={{ rotateX: "90deg" }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className={styles.lowerFlip}
        >
          {singleNumber(number)}
        </motion.div>
      </div>
      <p className={styles.text}>{dhms}</p>
      {/* <motion.p
        key={number + text + 2}
        animate={{ opacity: 0.6 }}
        initial={{ opacity: 0.1 }}
        transition={{ delay: 0, duration: 0.3 }}
        className={styles.text}
      >
        {dhms}
      </motion.p> */}
    </motion.div>
  );
};

// export const MemoizedCountItemCalendar = memo(CountItemCalendar);
export { CountItemCalendar };
