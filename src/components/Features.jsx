import { useState } from 'react'
import FeaturesCard from './FeaturesCard'


const Features = () => {

  const [cardContent] = useState([
    {
    id: 1,
    img: './images/features/credit-card.svg',
    imgAlt: 'Credit card icon',
    title: 'Easy Payments',
    textContent: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'
    },
    {
    id: 2,
    img: './images/features/shield.svg',
    title: 'Data Security',
    textContent: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.'
    },
    {
    id: 3,
    img: './images/features/bars-graphic.svg',
    title: 'Cost Statistics',
    textContent: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.'
    },
    {
    id: 4,
    img: './images/features/communication.svg',
    title: 'Support 24/7',
    textContent: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'
    },
    {
    id: 5,
    img: './images/features/wallet.svg',
    title: 'Regular Cashback',
    textContent: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.'
    },
    {
    id: 6,
    img: './images/features/happy.svg',
    title: 'Top Standards',
    textContent: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'
    }
    ]);

  return (
    <section id="features">

      <div className="container">

        <div className="img-mobile">
          <img src="./images/features/mobile2.svg" alt="" />
        </div>

        <div className="content">
          <h2>App Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus
            facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        {
          cardContent.map(content => (<FeaturesCard key={content.id} content={content}/>))
        }

        </div>

    </section>

  )
}

export default Features