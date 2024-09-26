import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import styles from "./OrderedItem.module.css";

const OrderedItem = () => {
  const { cartItems, addToCart, decreaseQuantity } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return <p>Ваша корзина пуста</p>;
  }

  return (
    <>
      {cartItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className={`${styles.orderedItem} position-relative d-flex align-items-center`}
        >
          <div className={styles.orderedItemImage}>
            <img
              src={item.photo || "/assets/menuItem/Placeholder.png"}
              alt={item.name}
            />
          </div>
          <div className={`${styles.orderedItemText} d-flex flex-column ms-2`}>
            <p>{item.name}</p>
            <h3>{item.cost} руб.</h3>
          </div>
          <div
            className={`${styles.orderedItemControls} position-absolute d-flex justify-content-center`}
          >
            <button onClick={() => decreaseQuantity(item.id)}>
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path
                  d="M1 1L9 0.999999"
                  stroke="#38374A"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p>{item.quantity}</p>

            <button onClick={() => addToCart({ ...item, quantity: 1 })}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1L5 9" stroke="#38374A" strokeLinecap="round" />
                <path d="M1 5H9" stroke="#38374A" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderedItem;
