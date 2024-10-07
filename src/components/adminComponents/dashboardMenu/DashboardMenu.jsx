import { useContext, useEffect, useState } from "react";
import DashboardMenuItem from "../dashboardMenuItem/DashboardMenuItem";
import styles from "./DashboardMenu.module.css";
import { AdminDashboardContext } from "../../../context/adminDashboardContext/adminDashboardContext";

const DashboardMenu = () => {
  const { selectedCategory, categories } = useContext(AdminDashboardContext);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = categories.find((cat) => cat.id === selectedCategory);

  useEffect(() => {
    const fetchMenuItems = async () => {
        if (!selectedCategory) return; // Exit if no category is selected
      
        setLoading(true);
        setError(null);
      
        try {
            const response = await fetch(`api/admin/dish/list_get/${selectedCategory}/`, {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer 5RhC6qq3oHgGWEekdjbxFQJnRRwCbmAUME2UWp5xnSNm+T+RCe9Pst3E0ILIP1D8',
                'Content-Type': 'application/json'
              }
            });
        
            if (!response.ok) {
              throw new Error('Failed to fetch menu items');
            }
        
            const data = await response.json(); // Ensure data is parsed as JSON
            console.log('Fetched data:', data); // Log fetched data
            setMenuItems(data.list); // Assuming data is an array
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
      };
      
    fetchMenuItems();
  }, [selectedCategory]);

  return (
    <section className={`${styles.dashboardMenuContainer} d-flex flex-column`}>
      <div className={`${styles.categoryContainer} d-flex justify-content-between mb-3`}>
        <div className="d-flex flex-column">
          <h3>{category ? category.name : "Select a category"}</h3>
          <p>{menuItems.length} позиций</p>
        </div>
        <button>
          <svg
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.790039 1.5C0.790039 0.67157 1.46164 0 2.29004 0C3.11844 0 3.79004 0.67157 3.79004 1.5C3.79004 2.32843 3.11844 3 2.29004 3C1.46164 3 0.790039 2.32843 0.790039 1.5ZM0.790039 7C0.790039 6.1716 1.46164 5.5 2.29004 5.5C3.11844 5.5 3.79004 6.1716 3.79004 7C3.79004 7.8284 3.11844 8.5 2.29004 8.5C1.46164 8.5 0.790039 7.8284 0.790039 7ZM2.29004 11C1.46164 11 0.790039 11.6716 0.790039 12.5C0.790039 13.3284 1.46164 14 2.29004 14C3.11844 14 3.79004 13.3284 3.79004 12.5C3.79004 11.6716 3.11844 11 2.29004 11Z"
              fill="#1F2021"
            />
          </svg>
        </button>
      </div>

      {loading && <p>Loading menu items...</p>}
      {error && <p>Error: {error}</p>}

      <div className="d-flex flex-column gap-3">
        {menuItems.map((item) => (
          <DashboardMenuItem 
            key={item.id} // Assuming each item has a unique 'id'
            itemName={item.name}
            itemImg={item.photo} // Assuming 'image' is a property in the item object
            itemKCAL={item.kcal} // Assuming 'kcal' is a property in the item object
            itemPrice={item.cost} // Assuming 'price' is a property in the item object
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardMenu;
