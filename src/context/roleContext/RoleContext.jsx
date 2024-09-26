// context/RoleContext.js
import { createContext, useState, useEffect } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (storedRole && token) {
      setRole(storedRole);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (number, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/admin/authorization_number/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const { role, token } = data;

      localStorage.setItem("role", role);
      localStorage.setItem("token", token);

      setRole(role);
      setLoading(false);

      return { success: true };
    } catch (err) {
      setError("Authentication failed. Please try again.");
      setLoading(false);

      return { success: false };
    }
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  };

  return (
    <RoleContext.Provider value={{ role, setRole, login, logout, loading, error }}>
      {children}
    </RoleContext.Provider>
  );
};
