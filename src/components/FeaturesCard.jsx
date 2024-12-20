
const FeaturesCard = ({ content }) => {
  return (
    <div className="cards">
          <div className="card-image">
            <img src={content.img} alt={content.imgAlt} />
          </div>
          <div className="text">
            <h3>{content.title}</h3>
            <p>{content.textContent}</p>
          </div>
        </div>
  )
}

export default FeaturesCard