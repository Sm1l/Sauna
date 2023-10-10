import React from "react";
import { motion } from "framer-motion";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <motion.footer
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 3, opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.footer}
    ></motion.footer>
  );
};

export { Footer };
