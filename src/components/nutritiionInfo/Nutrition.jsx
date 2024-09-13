
const Nutrition = ({kcal, proteins, fats, carbs}) => {
  return (
    <div className="d-flex">
          <p>{kcal}</p>
          <p>{proteins}</p>
          <p>{fats}</p>
          <p>{carbs}</p>
        </div>
  )
}

export default Nutrition