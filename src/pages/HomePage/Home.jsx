import { Link } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import Menu from "../../components/menus/Menu";
import styles from "./Home.module.css";
import CallWaiter from "../../components/callWaiter/CallWaiter";
import Switch from "../../components/themeSwitcher/Switch";

const Home = () => {
  // const {categories} = useFetchAdminCategories();
  // console.log(categories);
  

  return (
    <div className={`${styles.homeContainer} container position-relative`}>
      <Link to={"/cart"}>
        <button className="">
          <svg
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14122 0.0303006C8.01157 0.0538963 7.73118 0.12914 7.51814 0.197394C7.30509 0.265695 6.99577 0.391038 6.83077 0.475945C6.66577 0.560805 6.37519 0.741877 6.18503 0.878291C5.99492 1.01466 5.70415 1.26577 5.53888 1.43633C5.37365 1.60685 5.12889 1.90778 4.99495 2.10508C4.86102 2.30238 4.68009 2.61785 4.59295 2.80615C4.50577 2.99449 4.37912 3.33853 4.31155 3.57073C4.20595 3.93363 4.18542 4.10654 4.16543 4.80212L4.14222 5.61131H2.07111H0V14.8057V24H9H18V14.8057V5.61131H15.9289H13.8578L13.8346 4.80212C13.8146 4.10654 13.794 3.93363 13.6884 3.57073C13.6209 3.33853 13.4942 2.99449 13.407 2.80615C13.3199 2.61785 13.139 2.30196 13.005 2.10423C12.8711 1.90651 12.6154 1.59615 12.4368 1.41461C12.2581 1.23307 11.9528 0.973143 11.7582 0.83701C11.5637 0.700878 11.2529 0.516991 11.0676 0.428425C10.8823 0.339812 10.5438 0.211185 10.3154 0.142603C9.95418 0.0341472 9.80063 0.0158524 9.13846 0.00262376C8.71962 -0.00577312 8.27086 0.00665801 8.14122 0.0303006ZM10.0479 1.58949C10.2308 1.65413 10.506 1.77807 10.6593 1.86485C10.8127 1.95168 11.0481 2.1169 11.1824 2.23202C11.3167 2.34713 11.5193 2.55283 11.6325 2.68911C11.7458 2.82538 11.9144 3.07719 12.0072 3.24865C12.0999 3.42015 12.2191 3.69997 12.2719 3.87049C12.3247 4.04105 12.3887 4.3811 12.414 4.62621C12.4392 4.87131 12.4603 5.19325 12.4608 5.34158L12.4615 5.61131H9H5.53846L5.53925 5.34158C5.53971 5.19325 5.56075 4.87131 5.58605 4.62621C5.61134 4.3811 5.67526 4.04105 5.72806 3.87049C5.78091 3.69997 5.90008 3.42015 5.99285 3.24865C6.08562 3.07719 6.25422 2.82538 6.36748 2.68911C6.48074 2.55283 6.68312 2.34713 6.8172 2.23202C6.95128 2.1169 7.19903 1.94554 7.36772 1.85125C7.53646 1.75696 7.81177 1.63678 7.97954 1.58419C8.14735 1.53165 8.33654 1.47846 8.4 1.46598C8.46346 1.45355 8.78539 1.44979 9.11539 1.45768C9.61228 1.4695 9.77252 1.49215 10.0479 1.58949ZM4.15385 8.42591V9.83321H4.84615H5.53846V8.42591V7.01861H9H12.4615V8.42591V9.83321H13.1538H13.8462V8.42591V7.01861H15.2308H16.6154V14.8057V22.5927H9H1.38462V14.8057V7.01861H2.76923H4.15385V8.42591Z"
              fill="white"
            />
          </svg>
        </button>
      </Link>
      <div className={`${styles.topContainer} d-flex justify-content-between`}>
        <div className={`${styles.inputWrapper} d-flex `}>
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8" stroke="#B6B6B6" strokeWidth="2" />
            <path
              d="M14.707 15.2928L20.707 21.2928"
              stroke="#B6B6B6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input type="text" />
        </div>
        <Switch />
      </div>
      {/* <div className={`${styles.homeBanner}`}></div> */}
      <Categories idRest={5} />
      <Menu idRest={5} />
      <CallWaiter />
    </div>
  );
};

export default Home;
