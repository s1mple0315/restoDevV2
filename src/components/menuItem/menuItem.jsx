import { Link } from "react-router-dom";
import styles from "./menuItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext/CartContext";

const MenuItem = ({ name, description, cost, photo, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      photo,
      cost,
    };
    addToCart(cartItem);
  };

  return (
    <div className={`${styles.menuItem} d-flex flex-column position-relative`}>
      <Link to={`/item/${id}`}>
        <img src={photo} alt={name} />
        <div className={styles.descriptionContainer}>
          <h3>{name}</h3>
          <p>{description}</p>
          <h2>{cost} руб.</h2>
        </div>
      </Link>
      <button onClick={handleAddToCart} className={`position-absolute ${styles.addToCartButton}`}>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.23379 0.0358782C6.08864 0.060427 5.82614 0.124848 5.65046 0.179043C5.47475 0.233269 5.19977 0.341034 5.03935 0.418495C4.87893 0.495988 4.61799 0.64497 4.45949 0.749544C4.30095 0.85415 4.03783 1.06846 3.87476 1.22582C3.71168 1.38318 3.4896 1.63708 3.38119 1.79007C3.27282 1.94302 3.11844 2.19483 3.03813 2.34962C2.95786 2.50442 2.84628 2.76946 2.79021 2.93861C2.73418 3.10776 2.66943 3.35403 2.64639 3.48587L2.60442 3.72561L1.50477 3.74124C0.422301 3.75663 0.403181 3.75804 0.283273 3.82996C0.216287 3.87015 0.125125 3.96287 0.0807269 4.03599L0 4.16892V9.87062V15.5723L0.0818935 15.7072C0.129889 15.7862 0.221569 15.8747 0.303463 15.921L0.443204 16H4.40741H8.37161L8.51135 15.921C8.59324 15.8747 8.68493 15.7862 8.73292 15.7072C8.79715 15.6014 8.81481 15.5296 8.81481 15.3746C8.81481 15.2195 8.79715 15.1477 8.73292 15.0419C8.68493 14.9629 8.59324 14.8744 8.51135 14.8281L8.37161 14.7491H4.83395H1.2963V9.87062V4.99214H1.94444H2.59259V6.02919V7.06624L2.67449 7.20109C2.72248 7.28012 2.81416 7.36858 2.89606 7.4149C3.00562 7.47688 3.08003 7.49392 3.24074 7.49392C3.40145 7.49392 3.47586 7.47688 3.58543 7.4149C3.66732 7.36858 3.759 7.28012 3.807 7.20109L3.88889 7.06624V6.02919V4.99214H7H10.1111V6.02919V7.06624L10.193 7.20109C10.241 7.28012 10.3327 7.36858 10.4146 7.4149C10.5241 7.47688 10.5986 7.49392 10.7593 7.49392C10.92 7.49392 10.9944 7.47688 11.1039 7.4149C11.1858 7.36858 11.2775 7.28012 11.3255 7.20109L11.4074 7.06624V6.02919V4.99214H12.0556H12.7037V7.78044V10.5687L12.7856 10.7036C12.8336 10.7826 12.9253 10.8711 13.0072 10.9174C13.1167 10.9794 13.1911 10.9964 13.3519 10.9964C13.5126 10.9964 13.587 10.9794 13.6965 10.9174C13.7784 10.8711 13.8701 10.7826 13.9181 10.7036L14 10.5687V7.36883V4.16892L13.9193 4.03599C13.8749 3.96287 13.7837 3.87015 13.7167 3.82996C13.5968 3.75804 13.5777 3.75663 12.4952 3.74124L11.3956 3.72561L11.3536 3.48587C11.3306 3.35403 11.2658 3.10776 11.2098 2.93861C11.1537 2.76946 11.042 2.50442 10.9616 2.34962C10.8812 2.19483 10.7566 1.98374 10.6848 1.88054C10.6129 1.77734 10.4619 1.58667 10.3493 1.45686C10.2366 1.32702 10.0463 1.13895 9.92632 1.03888C9.80638 0.938836 9.60543 0.790042 9.47978 0.708233C9.35414 0.626394 9.12029 0.496082 8.96016 0.418589C8.8 0.341096 8.55231 0.240618 8.40972 0.195305C8.26713 0.149991 8.04838 0.0906673 7.92361 0.0634604C7.77645 0.031375 7.48611 0.010016 7.09722 0.00263571C6.67531 -0.00533874 6.41949 0.00451205 6.23379 0.0358782ZM7.74508 1.35254C7.91428 1.39366 8.15886 1.47597 8.28865 1.53545C8.41841 1.5949 8.60783 1.69688 8.70959 1.76205C8.81131 1.82722 8.98755 1.96447 9.1012 2.06705C9.21482 2.16962 9.37281 2.33508 9.45227 2.43472C9.5317 2.53435 9.66052 2.73187 9.73852 2.87366C9.81653 3.01544 9.91767 3.25615 9.96333 3.40857C10.009 3.56099 10.0463 3.69818 10.0463 3.71347C10.0463 3.72945 8.75347 3.74124 7 3.74124C5.24653 3.74124 3.9537 3.72945 3.9537 3.71347C3.9537 3.69818 3.99104 3.56099 4.03667 3.40857C4.08233 3.25615 4.18347 3.01544 4.26148 2.87366C4.33948 2.73187 4.4683 2.53435 4.54773 2.43472C4.62719 2.33508 4.78518 2.16962 4.8988 2.06705C5.01245 1.96447 5.18535 1.82957 5.28306 1.76727C5.38073 1.70495 5.55113 1.6101 5.66167 1.55646C5.77225 1.50283 5.991 1.42262 6.14778 1.37821C6.3046 1.33384 6.55683 1.28796 6.70833 1.2763C6.85984 1.26463 7.08588 1.26019 7.21065 1.26641C7.33542 1.27264 7.57591 1.31138 7.74508 1.35254ZM11.7076 12.3273C11.63 12.3722 11.5349 12.465 11.4889 12.5408C11.413 12.6657 11.4074 12.7034 11.4074 13.0866V13.4982H10.9809C10.5832 13.4982 10.5449 13.5036 10.4146 13.5772C10.3327 13.6236 10.241 13.712 10.193 13.791C10.1288 13.8968 10.1111 13.9686 10.1111 14.1237C10.1111 14.2787 10.1288 14.3505 10.193 14.4563C10.241 14.5353 10.3327 14.6238 10.4146 14.6701C10.5449 14.7438 10.5832 14.7491 10.9809 14.7491H11.4074V15.1607C11.4074 15.5445 11.4129 15.5815 11.4893 15.7072C11.5373 15.7862 11.629 15.8747 11.7109 15.921C11.8204 15.983 11.8948 16 12.0556 16C12.2163 16 12.2907 15.983 12.4002 15.921C12.4821 15.8747 12.5738 15.7862 12.6218 15.7072C12.6982 15.5815 12.7037 15.5445 12.7037 15.1607V14.7491H13.1302C13.528 14.7491 13.5663 14.7438 13.6965 14.6701C13.7784 14.6238 13.8701 14.5353 13.9181 14.4563C13.9823 14.3505 14 14.2787 14 14.1237C14 13.9686 13.9823 13.8968 13.9181 13.791C13.8701 13.712 13.7784 13.6236 13.6965 13.5772C13.5663 13.5036 13.528 13.4982 13.1302 13.4982H12.7037V13.0866C12.7037 12.7028 12.6982 12.6659 12.6218 12.5402C12.5738 12.4611 12.4821 12.3727 12.4002 12.3263C12.2899 12.2639 12.2168 12.2474 12.0527 12.2476C11.8882 12.2479 11.8163 12.2645 11.7076 12.3273Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default MenuItem;
