"use client";

import styles from "./Comments.module.css";

import { useSession } from "next-auth/react";

import Link from "next/link";

import { formatDate } from "@/hooks/formatDate";

import useSWR from "swr";
import { useState } from "react";

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

  console.log(new Date());

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    }),
    mutate()
  };

  return (
    <div className={styles.component}>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className={styles.text_area_input}
            name=""
            id=""
            placeholder="Deixe seu comentário."
          ></textarea>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      ) : (
        <Link href="/login">Faça login para deixar seu comentário</Link>
      )}
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
                  <div className={styles.name_and_date_comment}>
                    <span className={styles.user_name}>{item.user.name}</span>
                    <span className={styles.date}>
                      {formatDate(item.createdAt.substring(0, 10))}
                    </span>
                  </div>
                  <span className={styles.comment}>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default comments;
