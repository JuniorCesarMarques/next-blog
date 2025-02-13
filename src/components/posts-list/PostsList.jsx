import Pagination from "../pagination/Pagination";

import styles from "./PostsList.module.css";

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
  const posts = await getData(page, cat);

  return (
    <div className={styles.container}>
      {posts?.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
      <Pagination page={page} />  
    </div>
  );
};

export default PostsList;
