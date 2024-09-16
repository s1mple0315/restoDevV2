import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import OrderedItem from '../../components/orderedItem/OrderedItem';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context

  // Calculate total cost of items in the cart
  const totalCost = cartItems.reduce((acc, item) => acc + item.cost * item.quantity, 0);

  // Optionally, calculate a service fee (10% of total cost)
  const serviceFee = totalCost * 0.1;

  // Calculate the grand total (total cost + service fee)
  const grandTotal = totalCost + serviceFee;

  return (
    <div className={`${styles.cartSection} container`}>
      <h2>Ваш заказ</h2>
      <div className={`${styles.orderDetailsContainer} d-flex flex-column gap-3`}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <OrderedItem key={item.id} {...item} /> // Pass item details to OrderedItem
          ))
        ) : (
          <p>Корзина пуста</p> // Display a message if cart is empty
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
