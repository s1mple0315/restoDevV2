import styles from "./NutritionInfo.module.css";

const Nutrition = ({ kcal, proteins, fats, carbs }) => {
  return (
    <div
      className={`${styles.nutritionContainer} d-flex justify-content-between`}
    >
      <p>{kcal}</p>
      <p>{proteins}</p>
      <p>{fats}</p>
      <p>{carbs}</p>
    </div>
  );
};

export default Nutrition;
