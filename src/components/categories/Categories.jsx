import styles from "./Categories.module.css";
import useFetchCategories from "../../hooks/Client/useFetchCategories";

const Categories = ({ idRest }) => {
  const { categories, loading, error } = useFetchCategories(idRest);
  

  const handleCategoryClick = (categoryId) => {
    const menuSection = document.getElementById(`category-${categoryId}`);
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div
              key={category.id}
              className={`${styles.categoriesContainer}`}
              onClick={() => handleCategoryClick(category.id)} 
              style={{ cursor: "pointer" }}
            >
              <div className={`${styles.categoryItem}`}></div>
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
