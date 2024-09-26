import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import OrderedItem from "../../components/orderedItem/OrderedItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

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
      <div className={`${styles.cartSectionControls} position-relative`}>
        <Link to="/">
          <button className={styles.cartHomeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </button>
        </Link>
      </div>

      <h2>Ваш заказ</h2>
      <div
        className={`${styles.orderDetailsContainer} d-flex flex-column gap-3`}
      >
        <OrderedItem />
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
