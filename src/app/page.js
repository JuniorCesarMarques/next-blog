import CategoryList from "@/components/category-list/CategoryList";
import styles from "./page.module.css";
import PostsList from "@/components/posts-list/PostsList";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.page}>
      <PostsList page={page} />
      <CategoryList />
    </div>
  );
}
