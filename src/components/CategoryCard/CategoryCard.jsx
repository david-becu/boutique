import React from 'react';
import './CategoryCard.css';

const CategoryCard = (props) => {
    return (
        <>
            <div className="categoryCard d-flex justify-content-center m-2">
                <div className="card ">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.categoryCard}</h5>
                        <p className="card-text">{props.cardText}</p>
                        <a href="#" className="btn btn-primary">{props.buttonText}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCard;