import React from 'react';
import './CategoryCard.css';

const CategoryCard = (props) => {
    return(
        <div className="card" >
        <img src={props.cardImage} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardText}</p>
          <a href="https://www.google.com" className="btn btn-primary">Choisir</a>
        </div>
      </div>

    )
}

export default CategoryCard;