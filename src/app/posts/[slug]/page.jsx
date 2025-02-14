import styles from "./SinglePage.module.css";

import { formatDate } from "@/hooks/formatDate";

import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const data = await getData(slug);

  const date = formatDate(data.createdAt.substring(0, 10));

  return (
    <div className={styles.page}>
      <h1>{data.title}</h1>
      <div className={styles.userTextContainer}>
        <img src={data.user.image} alt="" />
        <span>{data.user.name}</span>
        <span>{date}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
      <Comments postSlug={slug} />
    </div>
  );
};

export default SinglePage;
