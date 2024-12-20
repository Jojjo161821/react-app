const ContactsAddress = () => {
  return (
    <section id="location">

      <div className="container">

        <div className="map-container">
          <img src="images/contacts/map.svg" alt="map with medical center locations" />
        </div>

        <div className="address-container">

          <div className="address-card">
            <h4>Medical Center 1</h4>
            <div className="address">
              <img src="images/contacts/bx-map.svg" alt="" />
              <p className="text-m">4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
            <div className="phonenumber">
              <img src="images/contacts/bx-phone-call.svg" alt="" />
              <p className="text-m">(406) 555-0120</p>
            </div>

            <div className="openinghours-container">
              <div className="img-container">
                <img src="images/contacts/bx-time-five.svg" alt="" />
              </div>
              <div className="openinghours">
                <p className="text-m">Mon – Fri: <span>9:00 am – 22:00 am </span></p>
                <p className="text-m">Sat - Sun: <span>9:00 am – 20:00 am </span></p>
              </div>
            </div>

          </div>
          <div className="address-card">
            <h4>Medical Center 2</h4>
            <div className="address">
              <img src="images/contacts/bx-map.svg" alt="" />
              <p className="text-m">2464 Royal Ln. Mesa,New Jersey 45463</p>
            </div>
            <div className="phonenumber">
              <img src="images/contacts/bx-phone-call.svg" alt="" />
              <p className="text-m">(406) 544-0123</p>
            </div>

            <div className="openinghours-container">
              <div className="img-container">
                <img src="images/contacts/bx-time-five.svg" alt="" />
              </div>
              <div className="openinghours">
                <p className="text-m">Mon – Fri: <span>9:00 am – 22:00 am </span></p>
                <p className="text-m">Sat - Sun: <span>9:00 am – 20:00 am </span></p>
              </div>
            </div>

            <div className="icons">
              <img src="images/contacts/facobook.svg" alt="facebook icon" />
              <img src="images/contacts/twitter.svg" alt="twitter icon" />
              <img src="images/contacts/insta.svg" alt="instagram icon" />
              <img src="images/contacts/youtube.svg" alt="youtube icon" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default ContactsAddress