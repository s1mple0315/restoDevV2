import useFetchAdminCategories from "../../../hooks/admin/useFetchAdminCategories";
import styles from "./DashboardNavbar.module.css";
import DashboardCategories from "../dashboardCategories/DashboardCategories";
import Modal from "../modal/Modal";

import { useState } from "react";

const DashboardNavbar = () => {
  const { categories, loading, error } = useFetchAdminCategories();
  const [newCategory, setNewCategory] = useState("");
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = async () => {
    if (!newCategory) {
      alert("Please enter a category name");
      return;
    }

    try {
      const response = await fetch("/api/admin/menu/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_TOKEN`, // Use your token here
        },
        body: JSON.stringify({
          name: newCategory, // Send the category name in the request body
        }),
      });

      const data = await response.json();
      if (data.message === "successfully") {
        setMessage("Category created successfully");
        setNewCategory(""); 
      } else {
        setMessage(`Error: ${data.description}`);
      }
    } catch (error) {
      setMessage("Error occurred while creating the category");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
          <DashboardCategories name={category.name} key={category.id} />
        ))}
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Add Category"
      >
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category Name"
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </Modal>
    </nav>
  );
};

export default DashboardNavbar;
