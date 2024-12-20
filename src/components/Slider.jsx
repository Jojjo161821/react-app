const Slider = () => {
  return (
    <section id="slider">

      <div className="container">

        <h2 className="headline">How Does It Work?</h2>

        <div className="images-mobile">
          <img src="/images/slider/iphone-transfer-mobile.svg" alt=""/>
        </div>

        <div className="images-tablet">
          <img src="/images/slider/slider-your-cardsTablet.svg" alt=""/>
          <img src="/images/slider/iphone-transfer-mobile.svg" alt="" className="transfer"/>
          <img src="/images/slider/slider-transferTablet.svg" alt=""/>
        </div>

        <div className="images-desktop">
          <img src="/images/slider/SlideriPhone1Desktop.svg" alt=""/>
          <img src="/images/slider/SlideriPhone2Desktop.svg" alt=""/>
          <img src="/images/slider/SlideriPhone3Desktop.svg" alt=""/>
        </div>

        <div className="subheading-desktop">
          <h4>Latest transaction history</h4>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum. </p>
        </div>

        <div className="subheading-tablet">
          <h4>Step 3. Transfers to people from your
            contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.</p>
        </div>

        <div className="subheading-mobile">
          <h4>Transfers to people from
            your contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus.</p>
        </div>

      </div>
    </section>
  )
}

export default Slider