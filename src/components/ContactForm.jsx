import { useContext, useState } from 'react'
import { AppContext } from '../services/AppProvider'

const ContactForm = () => {

  const { handleContactForm, isFormSubmitted, contactFormData, setContactFormData, setIsFormSubmitted} = useContext(AppContext);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';

    if (name === 'fullName' && !/^([A-Öa-ö]{2,})+\s([A-Öa-ö]{2,})$/.test(value)) {
      error = "Must contain first and last name";
    }
    if (name === 'email' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      error = "Please enter a valid email address";
    }
    if (name === 'specialist' && !/^([A-Öa-ö]{2,})+\s([A-Öa-ö]{2,})$/.test(value)) {
      error = "Please choose a specialist";
    }

    setErrors(prevErrors => ({...prevErrors, [name]: error}));
  }

  const validateForm = () => {
    const newErrors = {};

    if (!/^([A-Öa-ö]{2,})+\s([A-Öa-ö]{2,})$/.test(contactFormData.fullName)) {
      newErrors.fullName = "Must contain first and last name";
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contactFormData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!/^([A-Öa-ö]{2,})+\s([A-Öa-ö]{2,})$/.test(contactFormData.specialist)) {
      newErrors.specialist = "Please choose a specialist";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleOnChange(e) {
    const { name, value } = e.target
    setContactFormData({...contactFormData, [name]: value})

    validateField(name, value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      handleContactForm();
      setContactFormData({ fullName: '', email: '', specialist: ''})
    } else {
      setIsFormSubmitted(false);
    }
  }

  return (

    <form className="contact-form" onSubmit={handleSubmit} noValidate>

      <div className="input-group">
        <label htmlFor="fullname" className="form-label">Full name</label>
        <input type="text" className="form-input" name='fullName' value={contactFormData.fullName} onChange={handleOnChange} required />
        <p className='error-message'>{errors.fullName}</p>
      </div>

      <div className="input-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-input" name='email' value={contactFormData.email} onChange={handleOnChange} required />
        <p className='error-message'>{errors.email}</p>
      </div>

      <div className="input-group">
        <label htmlFor="specialist" className="form-label">Specialist</label>
        <select name='specialist' className="form-input" onChange={handleOnChange} required >
          <option value=''>--Please choose an option--</option>
          <option value="Specialist One">Developer</option>
          <option value="Specialist Two">Nurse</option>
          <option value="Specialist Three">Horse Whisperer</option>
          <option value="Specialist Four">Ninja</option>
          <option value="Specialist Five">Paw Patrol Pup</option>
        </select>
        <p className='error-message'>{errors.specialist}</p>
      </div>

      <p className={`message-box ${isFormSubmitted === true ? 'show-message' : ''}`}>Thank you for contacting us! We will get back to you shortly.</p>

      <button className="btn-primary btn-contact">Make an appointment</button>
    </form>

  )
}

export default ContactForm