import styles from "./OrderedItem.module.css";

const OrderedItem = () => {
  return (
    <div
      className={`${styles.orderedItem} position-relative d-flex align-items-center`}
    >
      <div className={`${styles.orderedItemImage}`}>
        <img src="/assets/menuItem/Placeholder.png" alt="" />
      </div>
      <div className={`${styles.orderedItemText} d-flex flex-column ms-2`}>
        <p>Название блюда</p>
        <h3>1 000 руб.</h3>
      </div>
      <div
        className={`${styles.orderedItemControls} position-absolute d-flex justify-content-center`}
      >
        <button>
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L9 0.999999" stroke="#38374A" strokeLinecap="round" />
          </svg>
        </button>
        <p>1</p>
        <button>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 1L5 9" stroke="#38374A" strokeLinecap="round" />
            <path d="M1 5H9" stroke="#38374A" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OrderedItem;
