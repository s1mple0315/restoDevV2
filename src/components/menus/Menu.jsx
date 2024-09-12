import MenuItem from "../menuItem/menuItem";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={`${styles.menuSection} container`}>
      <div className={`${styles.menuTitle}`}>
        <h2>Популярные блюда</h2>
      </div>
      <div className={`${styles.menuContainer}`}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default Menu;
