import styles from "./Login.module.css";

import ButtonLogout from "../components/button-logout/ButtonLogout";

import Link from "next/link";

const page = () => {
  return (
    <div className={styles.page}>
      <section className={styles.auth_section}>
        <span className={styles.logo}>Brothers</span>
        <p className={styles.login_message}>Entre na sua conta</p>
        <p className={styles.sign_in_message}>Não tem uma conta? <Link href="/sign-in">Cadastre-se</Link></p>
        <ButtonLogout />
      </section>
      <section className={styles.about_us_section}>
        <h1>O melhor do mundo automotivo está aqui.</h1>
      </section>
    </div>
  );
};

export default page;
