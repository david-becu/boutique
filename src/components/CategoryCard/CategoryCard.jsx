import React from 'react';
import './CategoryCard.css';

const CategoryCard = () => {
    return (
        <>
            <main>
                <div className="categoryCard d-flex justify-content-center m-2">
                    <div className="card ">
                        <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Category title</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et magnam animi. Cumque iusto dolores, soluta asperiores consectetur autem ex repellendus nobis in quae at, possimus distinctio error laudantium impedit?</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CategoryCard;