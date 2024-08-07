// src/pages/ProductListPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions'; // Use the correct action creator

const ProductListPage = () => {
  const dispatch = useDispatch();
  
  // Ensure the selector matches your state shape
  const productList = useSelector((state) => state.productList);
  
  useEffect(() => {
    dispatch(fetchProducts()); // Use the correct action creator
  }, [dispatch]);

  // Destructure only if productList is defined
  const { products = [], loading, error } = productList || {};

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
