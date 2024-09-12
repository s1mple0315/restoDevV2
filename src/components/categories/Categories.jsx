import styles from "./Categories.module.css";

const Categories = () => {
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
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
          <div className={`${styles.categoryItem}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
