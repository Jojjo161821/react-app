
const StarRatingItem = ({ item }) => {

  return (
      <i className={`${item ? 'fa-solid fa-star checked' : 'fa-regular fa-star'} `}></i>
  )
}

export default StarRatingItem