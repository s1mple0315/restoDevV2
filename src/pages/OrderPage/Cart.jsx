import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import OrderedItem from "../../components/orderedItem/OrderedItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  );
  const serviceFee = totalCost * 0.1;
  const grandTotal = totalCost + serviceFee;

  return (
    <div className={`${styles.cartSection} container`}>
      <h2>Ваш заказ</h2>
      <div className={`${styles.orderDetailsContainer} d-flex flex-column gap-3`}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <OrderedItem key={item.id} {...item} /> // Add a unique key here using item.id
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </div>
      <div className={`${styles.orderedTotal}`}>
        <div className={`d-flex justify-content-between`}>
          <p>Сумма заказа</p>
          <h3>{totalCost.toLocaleString()} руб.</h3>
        </div>
        <div className={`d-flex justify-content-between`}>
          <p>Обслуживание</p>
          <h3>{serviceFee.toLocaleString()} руб.</h3>
        </div>
        <hr />
        <div className={`d-flex justify-content-between`}>
          <p>Итого</p>
          <h3>{grandTotal.toLocaleString()} руб.</h3>
        </div>
      </div>
      <button className={`${styles.payOrderButton}`}>Оплатить</button>
    </div>
  );
};

export default Cart;
