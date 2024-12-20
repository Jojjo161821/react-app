import { Link } from 'react-router-dom'

function Hero() {

  return (
    <section id="hero">

      <div className="container">

        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>

        <div className="content">

          <p>We offer you a new generation of the mobile banking.
            Save, spend & manage money in your pocket.</p>

          <div className="buttons">
            <Link className="btn-download" href="#">
              <img src="/images/hero/google-play.svg" alt="appstore" className="btn-download-image darkmode-off" />
              <img src="/images/hero/google-play-dark.svg" alt="appstore" className="btn-download-image darkmode-on" />
            </Link>
            <Link className="btn-download" href="#">
              <img src="/images/hero/app-store.svg" alt="google play" className="btn-download-image darkmode-off" />
              <img src="/images/hero/appstore-dark.svg" alt="google play" className="btn-download-image darkmode-on" />
            </Link>
          </div>

          <div className="discover-more">
            <Link href="#features" className="btn-round" aria-label="Discover more">
              <i className="fa-regular fa-chevron-down arrow"></i>
            </Link>
            <span>Discover more</span>
          </div>
        </div>

        <div className="images">
          <img className="img-creditcard" src="/images/hero/iPhone-creditcard.svg" alt="mobile with creditcard" />
          <img className="img-budget" src="/images/hero/iPhone-budget.svg" alt="mobile with budgetgraph" />
        </div>

      </div>

    </section>
  )
}

export default Hero