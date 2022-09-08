import React, { useEffect } from 'react'

const ProductScreen = () => {

    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/products.json?key=f4d18fd0")
        .then((response) =>{ return console.log(response.json())});
    }, [] )

  return (
    <div className='ProductScreen bg-white '>
        <h1>Product Screen</h1>
    </div>
  )
}

export default ProductScreen