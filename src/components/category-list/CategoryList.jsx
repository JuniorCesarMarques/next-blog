import styles from "./CategoryList.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "force-cache",
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data?.map((category) => (
        <div className={styles.card_container} key={category.id}>
          <img
            src={`/images/categories${category.img}`}
            alt={category.title}
          />
          <h1>{category.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
