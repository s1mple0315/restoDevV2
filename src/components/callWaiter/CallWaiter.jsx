import styles from "./CallWaiter.module.css";

const CallWaiter = () => {
  return (
    <div className={`${styles.callBtnContainer} d-flex`}>
      <button className={`${styles.callBtn}`}>Позвать официанта</button>
    </div>
  );
};

export default CallWaiter;
