import { useState } from "react";
import styles from "./ItemDetail.module.css"

const ItemDetails = () => {

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };


  return (
    <div className={styles.itemDetails}>
      <img src={item.photo} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemInfo}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.cost} ₽</p>
        <div className={styles.quantityControls}>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
