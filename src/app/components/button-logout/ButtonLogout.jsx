"use client";

import styles from "./ButtonLogout.module.css";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

const ButtonLogout = () => {
  return (
    <button
      className={styles.container}
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      <FcGoogle />
      <span>Google</span>
    </button>
  );
};

export default ButtonLogout;
