import Pagination from "../pagination/Pagination";
import { formatDate } from "@/hooks/formatDate";

import styles from "./PostsList.module.css";

import Link from "next/link";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const PostsList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  const hasNext = page * POST_PER_PAGE < count;
  const hasPrev = page > 1;

  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <div className={styles.card_container} key={post.id}>
          <img src={`/images/posts-list${post.img}`} alt="" />
          <div className={styles.info_container}>
            <div className={styles.details}>
              <span className={styles.date}>
                {formatDate(post.createdAt.substring(0, 10))}
              </span>
              <span className={styles.category}>{post.catSlug}</span>
            </div>
            <h1>{post.title}</h1>
            <p className={styles.body}>{post.desc}</p>
            <Link href={`/posts/${post.slug}`}>Ler mais</Link>
          </div>
        </div>
      ))}
      <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page} />
    </div>
  );
};

export default PostsList;
