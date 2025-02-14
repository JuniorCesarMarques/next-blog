"use client";

import styles from "./Navbar.module.css";

import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";

import { motion } from "framer-motion";

import { signOut, useSession } from "next-auth/react";

const Navbar = ({ handleMenuToggle, isOpen }) => {
  const { data, status } = useSession();

  const picture = data
    ? data?.user?.image
    : "http://localhost:3000/images/profile-img.png";

  return (
    <nav className={styles.container}>
      <img src={picture} alt="foto do perfil" />

      <ul className={styles.options_menu}>
        <li>
          <Link href="/posts">Artigos</Link>
        </li>
        <li>
          <Link href="videos">Videos</Link>
        </li>
        <li>
          <Link href="store">Loja</Link>
        </li>
      </ul>

      <ul className={styles.auth_menu}>
        {status === "unauthenticated" && (
          <li className={styles.auth_button}>
            <Link href="register">Criar conta</Link>
          </li>
        )}

        {status === "unauthenticated" && (
          <li className={styles.auth_button}>
            <Link href="/login">
              Entrar <FaArrowRight />
            </Link>
          </li>
        )}

        {status === "authenticated" && (
          <li className={styles.auth_button}>
            <button onClick={() => signOut()}>
              Sair <FaArrowRight />
            </button>
          </li>
        )}
      </ul>

      {isOpen ? (
        <IoClose
          className={styles.menu_hamburguer}
          onClick={handleMenuToggle}
        />
      ) : (
        <IoMenuSharp
          className={styles.menu_hamburguer}
          onClick={handleMenuToggle}
        />
      )}

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
