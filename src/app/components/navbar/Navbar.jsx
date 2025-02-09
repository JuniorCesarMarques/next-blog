"use client";

import styles from "./Navbar.module.css";

import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";

import { motion } from "framer-motion";

import { signOut } from "next-auth/react";

const Navbar = ({ handleMenuToggle, isOpen, session }) => {
  const picture = session
    ? session?.user?.image
    : "https://autobrothers.com.br/images/navbar/profile-img.png";

  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        <img src={picture} alt="foto do perfil" />
        <span>Brothers</span>
      </div>

      <ul className={styles.options_menu}>
        <li>
          <Link href="/">Artigos</Link>
        </li>
        <li>
          <Link href="videos">Videos</Link>
        </li>
        <li>
          <Link href="store">Loja</Link>
        </li>
      </ul>

      <ul className={styles.auth_menu}>
        {session === null && (
          <li className={styles.auth_button}>
            <Link href="register">Criar conta</Link>
          </li>
        )}

        {session === null ? (
          <li className={styles.auth_button}>
            <Link href="login">
              Entrar <FaArrowRight />
            </Link>
          </li>
        ) : (
          <li className={styles.auth_button}>
            <button onClick={() => signOut()}>
              Sair <FaArrowRight />
            </button>
          </li>
        )}
      </ul>

      <IoMenuSharp
        className={styles.menu_hamburguer}
        onClick={handleMenuToggle}
      />

      <motion.ul
        className={styles.mobile_options_menu}
        initial={{ right: "-100%" }}
        animate={isOpen ? { right: "0" } : { right: "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <li>Artigos</li>
        <li>Vídeos</li>
        <li>Loja</li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
