import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./CountContainer.module.scss";
import { MemoizedCountItemCalendar } from "../CountItemCalendar";

interface CountContainerProps {
  finalDate: number;
  setCountIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountContainer: React.FC<CountContainerProps> = ({ finalDate, setCountIsVisible }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (finalDate > Date.now()) {
      setTimeLeft(finalDate - Date.now());
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft >= 1000 ? finalDate - Date.now() : 0));
        setCountIsVisible(finalDate > Date.now());
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setDays(Math.floor(timeLeft / 1000 / 60 / 60 / 24));
    setHours(Math.floor(timeLeft / 1000 / 60 / 60) % 24);
    setMinutes(Math.floor(timeLeft / 1000 / 60) % 60);
    setSeconds(Math.floor(timeLeft / 1000) % 60);
  }, [timeLeft]);

  return (
    <motion.div
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 1, type: "spring" }}
      className={styles.countContainer}
    >
      <MemoizedCountItemCalendar number={days} text="days" />
      <MemoizedCountItemCalendar number={hours} text="hours" />
      <MemoizedCountItemCalendar number={minutes} text="minutes" />
      <MemoizedCountItemCalendar number={seconds} text="seconds" />
    </motion.div>
  );
};

export { CountContainer };
