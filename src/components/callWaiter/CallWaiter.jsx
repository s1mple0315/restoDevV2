import { useState } from "react";
import styles from "./CallWaiter.module.css";

const CallWaiter = () => {
  const [messageVisible, setMessageVisible] = useState(false);

  const handleCallWaiter = () => {
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  };

  return (
    <div
      className={`${styles.callBtnContainer} d-flex flex-column align-items-center`}
    >
      <button className={`${styles.callBtn}`} onClick={handleCallWaiter}>
        Позвать официанта
      </button>
      {messageVisible && (
        <div className={styles.message}>Официант скоро придет!</div>
      )}
    </div>
  );
};

export default CallWaiter;
