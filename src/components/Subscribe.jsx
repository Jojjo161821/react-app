import { useContext, useState } from 'react'
import { AppContext } from '../services/AppProvider'

const Subscribe = () => {
  const { handleSubscribe, formInput, setFormInput, isResponseOk, setIsResponseOk } = useContext(AppContext);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      error = "Please enter a valid email address";
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error}));
  }

  const validateForm = () => {
    const newErrors = {};

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formInput.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });

    validateField(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      handleSubscribe();
      setFormInput({ email: '' });
    } else {
      setIsResponseOk(false);
    }
  }

  return (
    <section id="subscribe">

      <div className="container">

        <div className="content">

          <div className="headline-box">

            <div className="image">
              <img src="/images/subscribe/notification.svg" alt="notificationbell" />
            </div>

            <div className="headline">
              <h4 className="h4-desktop">Subscribe to our newsletter to stay informed about latest updates</h4>
              <h4 className="h4-mobile">Subscribe to our newsletter</h4>
            </div>

          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <i className="fa-regular fa-envelope icon"></i>
            <input className="form-input" type="email" name="email" placeholder="Your Email" onChange={handleOnChange} value={formInput.email} required />
            <button className="btn-subscribe btn-primary">Subscribe</button>
          </form>
          <p className={`message-box ${isResponseOk === true ? 'show-message' : ''}`}>Thank you for subscribing to our newsletter!</p>
          <p className='error-message'>{errors.email}</p>

        </div>
      </div>
    </section>
  )
}

export default Subscribe