import { useState, useContext } from "react";
import OrderedItem from "../../components/orderedItem/OrderedItem";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext/CartContext";
import Modal from "../../components/adminComponents/modal/Modal";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [tableNumber, setTableNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  );
  const serviceFee = totalCost * 0.1;
  const grandTotal = totalCost + serviceFee;

  const handleOrderClick = () => {
    setShowModal(true);
    setSuccessMessage(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setError(null);
    setTableNumber("");
    setSuccessMessage(null);
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const orderData = {
    table_id: tableNumber,
    dishes: cartItems.map((item) => item.id),
  };

  const handleOrderSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`api/user/order/create/5/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order.");
      }

      const result = await response.json();
      console.log("Order placed successfully:", result);
      setSuccessMessage(`Заказ успешно создан. Общая стоимость: ${grandTotal.toLocaleString()} руб.`);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

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
      <div className={`${styles.orderDetailsContainer} d-flex flex-column gap-3`}>
        {cartItems.map((item) => (
          <OrderedItem key={item.id} item={item} />
        ))}
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
      <button onClick={handleOrderClick} className={`${styles.payOrderButton}`}>
        Оплатить
      </button>

      {/* Modal for order confirmation */}
      <Modal
        show={showModal}
        onClose={handleModalClose}
        title="Подтвердите заказ"
      >
        {successMessage ? (
          <div>
            <p>{successMessage}</p>
            <button onClick={handleModalClose} className="btn btn-success mt-3">
              ОК
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column gap-2">
            <label>Введите номер стола:</label>
            <input
              type="text"
              value={tableNumber}
              onChange={handleTableNumberChange}
              placeholder="Номер стола"
              className="form-control"
            />
            {error && <p className="text-danger">{error}</p>}
            <button
              onClick={handleOrderSubmit}
              className="btn btn-primary mt-3"
              disabled={loading}
            >
              {loading ? "Отправка..." : "Подтвердить"}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
