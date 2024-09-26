import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${styles.dashboardHeader} d-flex justify-content-between`}>
      <div className={`${styles.headerLeftContainer} d-flex`}>
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66669 12.5C6.66669 12.9602 7.03979 13.3333 7.50002 13.3333H32.5C32.9602 13.3333 33.3334 12.9602 33.3334 12.5V10.8333C33.3334 10.3731 32.9602 10 32.5 10H7.50002C7.03979 10 6.66669 10.3731 6.66669 10.8333V12.5ZM6.66669 20.8333C6.66669 21.2935 7.03979 21.6667 7.50002 21.6667H32.5C32.9602 21.6667 33.3334 21.2935 33.3334 20.8333V19.1667C33.3334 18.7065 32.9602 18.3333 32.5 18.3333H7.50002C7.03979 18.3333 6.66669 18.7065 6.66669 19.1667V20.8333ZM7.50002 30C7.03979 30 6.66669 29.6268 6.66669 29.1667V27.5C6.66669 27.0398 7.03979 26.6667 7.50002 26.6667H32.5C32.9602 26.6667 33.3334 27.0398 33.3334 27.5V29.1667C33.3334 29.6268 32.9602 30 32.5 30H7.50002Z"
              fill="#38374A"
            />
          </svg>
        </button>
        <p>Меню</p>
      </div>
      <div
        className={`${styles.headerRightContainer} d-flex align-items-center`}
      >
        <div className={`${styles.headerInputContainer} d-flex `}>
          <input type="text" />
          <button>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0919 15.676C12.6446 16.8183 10.8169 17.5 8.82996 17.5C4.13554 17.5 0.329956 13.6944 0.329956 9C0.329956 4.30558 4.13554 0.5 8.82996 0.5C13.5244 0.5 17.33 4.30558 17.33 9C17.33 10.9868 16.6483 12.8145 15.5061 14.2618L20.3332 19.0889L18.919 20.5031L14.0919 15.676ZM15.33 9C15.33 12.5899 12.4199 15.5 8.82996 15.5C5.24011 15.5 2.32996 12.5899 2.32996 9C2.32996 5.41015 5.24011 2.5 8.82996 2.5C12.4199 2.5 15.33 5.41015 15.33 9Z"
                fill="#999C9E"
              />
            </svg>
          </button>
        </div>
        <button>?</button>
      </div>
    </div>
  );
};

export default Header;
