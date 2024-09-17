import styles from "./CookingTime.module.css";

const CookingTime = ({ time }) => {
  return (
    <div className={`${styles.cookingTimeContainer} d-flex`}>
      <svg
      className="me-1"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="10"
          transform="rotate(-90 10.5 10.5)"
          stroke="#B6B6B6"
        />
        <path d="M17 10L10 12L7.5 4" stroke="#B6B6B6" strokeLinecap="round" />
      </svg>
      <p>{time}</p>
    </div>
  );
};

export default CookingTime;
