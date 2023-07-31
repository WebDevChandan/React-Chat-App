"use client";

import { useEffect, useState } from 'react'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div>
      <h1>Product List</h1>

      {
        products.map((product) => (
          <h3 key={product.id}>{product.title}</h3>
        ))
      }

    </div>
  )
}

export default ProductList