import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

const Home = lazy(() => import("../pages/HomePage/Home"));
const Cart = lazy(() => import("../pages/OrderPage/Cart"));
const ItemDetails = lazy(() => import("../pages/ItemDetails/ItemDetails"));
const AdminDashboard = lazy(() => import("../pages/admin/dashboard/AdminDashboard"));
const LoginPage = lazy(() => import("../pages/admin/loginPage/LoginPage"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
