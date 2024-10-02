import { useState, useEffect } from "react";

const useFetchAdminCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          setLoading(true);
          const response = await fetch("api/admin/menu/get/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer 5RhC6qq3oHgGWEekdjbxFQJnRRwCbmAUME2UWp5xnSNm+T+RCe9Pst3E0ILIP1D8`
            }
          });
  
          console.log('Full response:', response);
          
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
  
          const data = await response.json();
          console.log('Parsed JSON:', data);
  
          if (data.list) {
            setCategories(data.list);
          } else {
            throw new Error('No category list found');
          }
        } catch (err) {
          console.error('Error fetching categories:', err.message);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchCategories();
    }, []);
  
    return { categories, loading, error };
  };
  
  export default useFetchAdminCategories;
  