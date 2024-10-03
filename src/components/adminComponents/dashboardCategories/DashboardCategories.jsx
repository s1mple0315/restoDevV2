import { useContext } from "react";
import styles from "./DashboardCategories.module.css";
import { AdminDashboardContext } from "../../../context/adminDashboardContext/adminDashboardContext";

const DashboardCategories = ({ name, id }) => {
  const { setSelectedCategory } = useContext(AdminDashboardContext);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div
      onClick={() => handleCategoryClick(id)}
      className={`${styles.dashboardCategory}`}
    >
      <p>{name}</p>
    </div>
  );
};

export default DashboardCategories;
