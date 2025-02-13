"use client"

import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

const Pagination = ({page}) => {

    const router = useRouter();
  return (
    <div className={styles.container}>
        <button onClick={() => router.push(`?page=${page - 1}`)}>Anterior</button>
        <button onClick={() => router.push(`?page=${page + 1}`)}>Proxima</button>
    </div>
  )
}

export default Pagination;