import React from 'react';
import './Pages.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import ContactForm from '../ContactForm/ContactForm';

const Pages = () => {

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

  return (
    <>
      <header className='container-fluid'>
        <div className='pages row bg-dark text-light text-center'>
          <h1>La boutique de nom/prénom</h1>
        </div>
      </header>

      <main className='container d-flex justify-content-evenly'>
        <div className='elements d-flex'>
          {elements}
        </div>
        <br />
        <div className='contactForm'>
          <ContactForm />
        </div>
      </main>
    </>
  )
}

export default Pages;