import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <>
    <section id="contacts">

      <div className="container">

        <div className="contact-container">

          <Breadcrumb />
          <h1>Contact Us</h1>

          <div className="content-card">

            <div className="img-container">
              <img src="/images/contacts/email.svg" alt="envelope icon" />
            </div>

            <div className="text-container">
              <h4>Email us</h4>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
              <Link to="#" className="text-m">Leave a meassage
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>

          <div className="content-card">

            <div className="img-container">
              <img src="/images/contacts/carrers.svg" alt="users icon" />
            </div>

            <div className="text-container">
              <h4>Careers</h4>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
              <Link to="#">Send an application
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>

        <div className="form-card">

          <h2>Get Online Consultation</h2>

          <ContactForm />

        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs