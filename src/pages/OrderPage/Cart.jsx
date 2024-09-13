import OrderedItem from "../../components/orderedItem/OrderedItem";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={`${styles.cartSection} container`}>
      <h2>Ваш заказ</h2>
      <div className={`${styles.orderDetailsContainer} d-flex flex-column gap-3`}>
        <OrderedItem />
        <OrderedItem />
        <OrderedItem />
      </div>
      <div className={`${styles.orderedTotal}`}>
        <div className={`d-flex justify-content-between`}>
          <p>Сумма заказа</p>
          <h3>3 000 руб.</h3>
        </div>
        <div className={`d-flex justify-content-between`}>
          <p>Обслуживание</p>
          <h3>300 руб.</h3>
        </div>
        <hr />
        <div className={`d-flex justify-content-between`}>
          <p>Итого</p>
          <h3>3 300 руб.</h3>
        </div>
      </div>
      <button className={`${styles.payOrderButton}`}>Оплатить</button>
    </div>
  );
};

export default Cart;
