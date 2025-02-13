"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

import { motion } from "framer-motion";

const Header = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (width) => {
    width > 768 && setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => closeMenu(window.innerWidth));

    return () => {};
  });

  return (
    <motion.header
      className={styles.container}
      initial={{ height: "90px" }}
      animate={{ height: isOpen ? "200px" : "90px" }}
      transition={{ duration: isOpen ? 0.2 : 0.7, ease: "easeInOut" }}
    >
      <Navbar
        handleMenuToggle={handleMenuToggle}
        isOpen={isOpen}
        session={session}
      />
    </motion.header>
  );
};

export default Header;
