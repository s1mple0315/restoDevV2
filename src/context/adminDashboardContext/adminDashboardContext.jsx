import { createContext, useState, useEffect } from "react";

export const AdminDashboardContext = createContext();

export const AdminDashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const AUTH_TOKEN =
    "5RhC6qq3oHgGWEekdjbxFQJnRRwCbmAUME2UWp5xnSNm+T+RCe9Pst3E0ILIP1D8";

  // Function to fetch all menuItems
//   const fetchAdminDashboardMenuItems = async (selectedCategory) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/api/admin/dish/list_get/${selectedCategory}/`, {
//         headers: {
//           Authorization: `Bearer ${AUTH_TOKEN}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch");
//       }
//       const data = await response.json();
//       setMenuItems(data);
//       setLoading(false);
//       console.log(data )
//       console.log(menuItems )
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

  // Function to fetch categories
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/menu/get/", {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`, //Token from authoriztion
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setCategories(data.list); // assuming 'list' is where the data comes from
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Function to create a new category
  const createCategory = async (newCategory) => {
    try {
      const response = await fetch("/api/admin/menu/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify(newCategory),
      });
      const result = await response.json();
      if (result.message === "successfully") {
        fetchCategories(); // Re-fetch categories creating a new one
      } else {
        throw new Error(result.description);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to delete category
  //   const deleteCategory = async (menu_id) => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`api/admin/menu/delete/${menu_id}/`, {
  //         method: "DELETE",
  //         headers: {
  //           "content-type": "application/json",
  //           Authorization: `Bearer ${AUTH_TOKEN}`,
  //         },
  //       });
  //       if (!response.ok) {
  //         throw new Error("Failed to delete");
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <AdminDashboardContext.Provider
      value={{
        categories,
        // menuItems,
        selectedCategory,
        loading,
        error,
        createCategory,
        setSelectedCategory,
        // fetchAdminDashboardMenuItems,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  );
};
