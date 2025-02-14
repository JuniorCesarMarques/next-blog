import PostsList from "@/components/posts-list/PostsList";
import styles from "./BlogPage.module.css";

const BlogPage = ({ searchParams }) => {
  const page = searchParams.page || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{cat}</h1>
      <PostsList page={page} cat={cat} />
    </div>
  );
};

export default BlogPage;
