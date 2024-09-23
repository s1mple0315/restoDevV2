import { useEffect, useState } from "react";
import styles from "./Categories.module.css";

const Categories = ({ idRest }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`/api/user/menu/list/${idRest}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data.list);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [idRest]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`${styles.categoriesSection} container col`}>
      <div
        className={`${styles.categoriesTitle} d-flex justify-content-between`}
      >
        <h2>Категории</h2>
        <p>Еще</p>
      </div>

      <div className={styles.scrollableContainer}>
        <div className={`${styles.categories} d-flex`}>
          {categories.map((category) => (
            <div key={category.id}>
              <div className={`${styles.categoryItem}`} ></div>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
