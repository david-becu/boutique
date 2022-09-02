import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';


const Pages = () => {
  return (
    <>
      <header className='container-fluid'>
        <div className='pages row bg-dark text-light text-center'>
          <h1>La boutique de nom/prénom</h1>
        </div>
      </header>
      <main className='container d-flex justify-content-evenly'>
        <CategoryCard imageSrc="https://picsum.photos/200"
          cardTitle="Category One"
          buttonText="choice 1" 
          cardText="Ceci est une catégorie de premier choix"
          />-
        <CategoryCard imageSrc="https://picsum.photos/200"
          cardTitle="Category Two"
          buttonText="choice 2" 
          cardText="Ceci est une catégorie de second choix"
          />-
      </main>

    </>
  )
}

export default Pages