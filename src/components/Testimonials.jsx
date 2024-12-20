import { useContext } from 'react'
import TestimonialsCardItem from './TestimonialsCardItem'
import { AppContext } from '../services/AppProvider'

const Testimonials = () => {

  const { testimonials } = useContext(AppContext);

  return (
    <section id="testimonials">

      <div className="container">

        <div className="headline">
          <h3>Clients are Loving Our App</h3>
        </div>

        {
          testimonials.map(testimonial => (<TestimonialsCardItem key={testimonial.id} testimonial={testimonial}/>))
        }

      </div>

    </section>
  )
}

export default Testimonials