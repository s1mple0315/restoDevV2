import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home"
import Cart from "../pages/OrderPage/Cart";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
