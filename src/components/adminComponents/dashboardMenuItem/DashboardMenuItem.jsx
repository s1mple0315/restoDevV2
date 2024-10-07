import styles from "./DashboardMenuItem.module.css"

const DashboardMenuItem = ({itemName, itemImg, itemKCAL, itemPrice}) => {
  return (
    <div className={`${styles.menuItemContainer} d-flex justify-content-between align-items-center`}>
      <div className={`${styles.leftContainer} d-flex align-items-center gap-3`}>
        <input type="checkbox" defaultChecked/>
        <img src={itemImg || "assets/menuItem/Placeholder.png"} alt="img of a dish"/>
        <h4>{itemName}</h4>
        <p>{itemKCAL}</p>
      </div>
      <div className={`${styles.rightContainer} d-flex gap-4`}>
        <p>{itemPrice} ₽</p>
        <button>
          <svg
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.790039 1.5C0.790039 0.67157 1.46164 0 2.29004 0C3.11844 0 3.79004 0.67157 3.79004 1.5C3.79004 2.32843 3.11844 3 2.29004 3C1.46164 3 0.790039 2.32843 0.790039 1.5ZM0.790039 7C0.790039 6.1716 1.46164 5.5 2.29004 5.5C3.11844 5.5 3.79004 6.1716 3.79004 7C3.79004 7.8284 3.11844 8.5 2.29004 8.5C1.46164 8.5 0.790039 7.8284 0.790039 7ZM2.29004 11C1.46164 11 0.790039 11.6716 0.790039 12.5C0.790039 13.3284 1.46164 14 2.29004 14C3.11844 14 3.79004 13.3284 3.79004 12.5C3.79004 11.6716 3.11844 11 2.29004 11Z"
              fill="#1F2021"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardMenuItem;
