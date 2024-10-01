import React, {useEffect, useState} from 'react'

const useFetchCategories = (idRest) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(`/api/user/menu/list/${idRest}/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
    
          const data = await response.json();
          setCategories(data.list);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchCategories();
    }, [idRest]);

    return { categories, loading, error };
}

export default useFetchCategories;