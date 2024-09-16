import AppRouter from "./router/App-Router";
import { CartProvider } from "./context/cartContext/CartContext";

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
