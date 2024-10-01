import MenuItem from "../menuItem/menuItem";
import styles from "./Menu.module.css";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import useFetchMenuItems from "../../hooks/Client/useFetchMenuItems";
import useFetchCategories from "../../hooks/Client/useFetchCategories";

const Menu = ({ idRest }) => {
  const { menuItems, loading, error } = useFetchMenuItems(idRest);
  const { categories } = useFetchCategories(idRest);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const groupedMenuItems = categories.map((category) => {
    return {
      ...category,
      items: menuItems.filter((item) => item.id_menu === category.id),
    };
  });

  return (
    <div className={`${styles.menuSection} container`}>
      {groupedMenuItems.map((category) => (
        <div
          key={category.id}
          id={`category-${category.id}`}
          className={styles.categorySection}
        >
          <div className={styles.categoryTitle}>
            <h2>{category.name}</h2>
          </div>

          <div className={`${styles.menuContainer}`}>
            {category.items.length > 0 ? (
              category.items.map((item) => (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  cost={item.cost}
                  photo={item.photo}
                />
              ))
            ) : (
              <p>No items available in this category</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
