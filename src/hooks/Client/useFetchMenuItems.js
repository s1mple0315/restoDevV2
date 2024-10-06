import {useEffect, useState} from 'react'

const useFetchMenuItems = (idRest) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const response = await fetch(`/api/user/dish/list/${idRest}/`, {
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
            setMenuItems([]);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMenuItems();
    }, [idRest]);

    return {menuItems, loading, error}
}

export default useFetchMenuItems