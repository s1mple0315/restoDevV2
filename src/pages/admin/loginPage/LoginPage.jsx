import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // For redirection after login
import styles from "./LoginPage.module.css";
import { RoleContext } from "../../../context/roleContext/RoleContext";

const LoginPage = () => {
  const { login, error, loading } = useContext(RoleContext); // Access RoleContext
  const [loginNumber, setLoginNumber] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [formError, setFormError] = useState(""); // To display local form errors
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Call login function from RoleContext
    const result = await login(loginNumber, loginPassword);

    console.log(result);
    

    if (result.success) {
      // Redirect to another page after successful login
      navigate("admin/dashboard");
    } else {
      setFormError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={`${styles.loginPageContainer} d-flex`}>
      <div className={`${styles.loginLeftContainer} col-6`}>
        <img src="assets/admin/restoDev_Logo.png" alt="Logo" />
      </div>
      <div className={`${styles.loginRightContainer} col-6 d-flex flex-column`}>
        <form onSubmit={handleSubmit} className={`${styles.loginForm}`}>
          <h3 className="text-center p">Войти</h3>
          {formError && <p className="text-danger">{formError}</p>}
          {error && <p className="text-danger">{error}</p>} {/* Show error from context */}
          <div className="d-flex flex-column">
            <label htmlFor="loginNumber">Телефон</label>
            <input
              type="text"
              id="loginNumber"
              value={loginNumber}
              onChange={(e) => setLoginNumber(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="loginPassword">Пароль</label>
            <input
              type="password"
              id="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <input type="checkbox" name="remember" id="loginRememberCheckbox" />
              <label htmlFor="loginRememberCheckbox">Запомнить</label>
            </div>
            <a href="#">Забыли пароль?</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
