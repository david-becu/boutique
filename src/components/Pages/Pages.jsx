import React from 'react';
import './Pages.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import ContactForm from '../ContactForm/ContactForm';
import ProductScreen from '../ProductScreen/ProductScreen';

const Pages = ({currentPage, setCurrentPage}) => {

  const data = [
    { cardImage: 'img/homme.jpeg', cardTitle: 'Homme', cardText: 'Vétements pour hommes' },
    { cardImage: 'img/femme.jpeg', cardTitle: 'Femme', cardText: 'Vétements pour femmes' },
    { cardImage: 'img/enfant.jpeg', cardTitle: 'Enfant', cardText: 'Vétements pour enfants' },
    { cardImage: 'img/baby.jpeg', cardTitle: 'Baby', cardText: 'Vétements pour nourrissons' }
  ];

  const elements = data.map((element) =>
    <div className="categoryCard d-flex justify-content-center m-2" key={element.cardTitle}>
      <CategoryCard cardImage={element.cardImage} cardTitle={element.cardTitle} cardText={element.cardText} />
    </div>
  );

  if (currentPage === "HomeScreen") {
    return (
      <>
        <div className='elements d-flex'>
          {elements}
        </div>
        <br />
        <div className='contactForm'>
          <ContactForm />
        </div>
      </>
    )
  }

  if (currentPage === "ProductScreen") {
    return (
      <ProductScreen />
    )
  }
}

export default Pages;