import styles from "./DashboardNavbar.module.css";

const DashboardNavbar = () => {
  return (
    <nav
      className={`${styles.navbarContainer} d-flex flex-column position-absolute`}
    >
      <div className={`${styles.percentageContainer}`}>
        <p>Сколько фотографий в меню</p>
        <p>Хороший показатель: от 90%</p>
        <strong>Сейчас: 84%</strong>
      </div>
      <div>
        <div className={`${styles.titlePhoto} d-flex flex-column gap-2`}>
          <strong>Титульное фото</strong>
          <button>Редактировать</button>
        </div>
        <div className={`${styles.importButtonContainer} d-flex`}>
          <button>Импорт меню</button>
        </div>
        <div className={`${styles.stopList}`}>
          <strong>Стоп-лист</strong>
          <p>1 позиция</p>
        </div>
      </div>
      <div className={`${styles} d-flex `}>
        <span><p>Категории</p> 9</span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
