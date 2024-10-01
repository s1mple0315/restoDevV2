import AppRouter from "./router/App-Router";
import { CartProvider } from "./context/cartContext/CartContext";
import { RoleProvider } from "./context/roleContext/RoleContext";

const App = () => {
  return (
    <RoleProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </RoleProvider>
  );
};

export default App;
