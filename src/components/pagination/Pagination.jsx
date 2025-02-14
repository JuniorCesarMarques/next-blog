"use client";

import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Anterior
      </button>
      <button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Proxima
      </button>
    </div>
  );
};

export default Pagination;
