"use client";

import styles from "./GoogleAuthButton.module.css";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
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

export default GoogleAuthButton;
