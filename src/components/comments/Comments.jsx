"use client";

import styles from "./Comments.module.css";

import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );


  return (
    <div className={styles.component}>
      <textarea
        className={styles.text_area_input}
        name=""
        id=""
        placeholder="Deixe seu comentário."
      ></textarea>
      <h3>Comments</h3>
      {isLoading
        ? "Loading"
        : data.map((item) => (
            <div key={item.id}>
              <div className={styles.details}>
                {item.user.image ? (
                  <img src={item.user.image} alt="" />
                ) : (
                  <img src="http://localhost:3000/images/profile-img.png" />
                )}
                <div className={styles.comment_container}>
                  <span className={styles.user_name}>{item.user.name}</span>
                  <span className={styles.comment}>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default comments;
