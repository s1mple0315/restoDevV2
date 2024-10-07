import styles from "./DashboardNavbar.module.css";
import DashboardCategories from "../dashboardCategories/DashboardCategories";
import Modal from "../modal/Modal";

import { useContext, useState } from "react";
import { AdminDashboardContext } from "../../../context/adminDashboardContext/adminDashboardContext";

const DashboardNavbar = () => {
  const {
    categories,
    selectedCategory,
    createCategory,
    setSelectedCategory,
    loading,
    error,
  } = useContext(AdminDashboardContext);
  const [newCategory, setNewCategory] = useState({ name: "" });
  // const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  //   console.log("Selected category:", category); // Check if it's logged correctly
  // };

  const handleAddCategory = (e) => {
    e.preventDefault();

    if (!newCategory.name) {
      alert("Please enter a category name");
      return;
    }

    createCategory(newCategory);
    setNewCategory({ name: "" });
    setShowModal(false);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <nav
      className={`${styles.navbarContainer} d-flex flex-column position-absolute`}
    >
      <div className={`${styles.percentageContainer}`}>
        <p>Сколько фотографий в меню</p>
        <p>Хороший показатель: от 90%</p>
        <strong>Сейчас: 84%</strong>
      </div>
      <div>
        <div className={`${styles.titlePhoto} d-flex flex-column gap-2`}>
          <strong>Титульное фото</strong>
          <button>Редактировать</button>
        </div>
        <div className={`${styles.importButtonContainer} d-flex`}>
          <button>Импорт меню</button>
        </div>
        <div className={`${styles.stopList}`}>
          <strong>Стоп-лист</strong>
          <p>1 позиция</p>
        </div>
      </div>

      <div className={`${styles.categoriesSection} d-flex flex-column gap-2`}>
        <div
          className={`${styles.addCategoriesContainer} d-flex justify-content-between`}
        >
          <div className="d-flex">
            <p>Категории</p> <span>{categories.length}</span>
          </div>
          <button onClick={() => setShowModal(true)}>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.66992 0V8H0.669922V10H8.66992V18H10.6699V10H18.6699V8H10.6699V0H8.66992Z"
                fill="#1F2021"
              />
            </svg>
          </button>
        </div>
        {categories.map((category) => (
          <DashboardCategories name={category.name} key={category.id} id={category.id} />
        ))}
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Add Category"
      >
        <input
          type="text"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({
              ...newCategory,
              name: `${e.target.value}`,
            })
          }
          placeholder="Category Name"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </Modal>
    </nav>
  );
};

export default DashboardNavbar;
