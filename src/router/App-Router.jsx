import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home"
import Cart from "../pages/OrderPage/Cart";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import LoginPage from "../pages/admin/loginPage/LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
