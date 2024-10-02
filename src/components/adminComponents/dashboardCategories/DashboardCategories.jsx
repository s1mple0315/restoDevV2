import styles from "./DashboardCategories.module.css"

const DashboardCategories = ({ name }) => {
  return <div className={`${styles.dashboardCategory}`}><p>{name}</p></div>;
};

export default DashboardCategories;
