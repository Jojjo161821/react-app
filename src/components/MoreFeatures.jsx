import { Link } from 'react-router-dom'

const MoreFeatures = () => {
  return (
    <section id="features-2">

      <div className="container">

        <div className="content-box-1">

          <h2>Make your money transfer simple and clear</h2>

          <div className="list-box">
            <div className="list-item">
              <img src="/images/features2/bx-check-circle.svg" alt="checkmark" />
              <span>Banking transactions are free for you</span>
            </div>
            <div className="list-item">
              <img src="/images/features2/bx-check-circle.svg" alt="checkmark" />
              <span>No monthly cash commission</span>
            </div>
            <div className="list-item">
              <img src="/images/features2/bx-check-circle.svg" alt="checkmark" />
              <span>Manage payments and transactions online</span>
            </div>
          </div>

          <Link href="#" className="btn-learn-more btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div>
          <img src="/images/features2/Money-graph.svg" alt="app showcase money graph" />
        </div>

        <div>
          <img src="/images/features2/contacts.svg" alt="app showcase contacts" className="img-contacts" />
        </div>

        <div className="content-box-2">

          <h2>Receive payment from international bank details</h2>

          <div className="info-boxes">
            <div className="info-box">
              <div className="card-image">
                <img src="/images/features2/credit-card.svg" alt="credit icon" />
              </div>
              <div>
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
            </div>

            <div className="info-box">
              <div className="card-image">
                <img src="/images/features2/wallet.svg" alt="wallet icon" />
              </div>
              <div>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>

          </div>
          <Link href="#" className="btn-learn-more btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MoreFeatures