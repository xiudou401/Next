import React from 'react';

interface Product {
  brand: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
}

interface Props {
  product: Product;
}

export default function Card({ product }: Props) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <h3>{product.title}</h3>
      <h4>{product.description}</h4>
      <h5>${product.price}</h5>
      <h5>{product.discountPercentage}%</h5>
    </div>
  );
}
