import AppRouter from "./router/App-Router";
import { CartProvider } from "./context/cartContext/CartContext";
import { RoleProvider } from "./context/roleContext/RoleContext";
import { AdminDashboardProvider } from "./context/adminDashboardContext/adminDashboardContext";

const App = () => {
  return (
    <RoleProvider>
      <AdminDashboardProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </AdminDashboardProvider>
    </RoleProvider>
  );
};

export default App;
