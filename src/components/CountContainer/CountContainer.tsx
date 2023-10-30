import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./CountContainer.module.scss";
import { CountItemCalendar } from "../CountItemCalendar";

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

  // const formatter = new Intl.NumberFormat("ru", {
  //   style: "unit",
  //   unit: "day",
  //   unitDisplay: "long",
  // });
  // console.log(formatter.format(23));

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
      <CountItemCalendar number={days} text="day" />
      <CountItemCalendar number={hours} text="hour" />
      <CountItemCalendar number={minutes} text="minute" />
      <CountItemCalendar number={seconds} text="second" />
    </motion.div>
  );
};

export { CountContainer };
