import { useEffect, useState } from "react";
import MenuItem from "../menuItem/menuItem";
import styles from "./Menu.module.css";
import LoadingScreen from "../loadingScreen/LoadingScreen";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api/user/dish/list/5/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        if (data.list) {
          setMenuItems(data.list);
        } else {
          setMenuItems([]); // Set to empty if no items found
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={`${styles.menuSection} container`}>
      <div className={`${styles.menuTitle}`}>
        <h2>Популярные блюда</h2>
      </div>
      <div className={`${styles.menuContainer}`}>
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
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
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
