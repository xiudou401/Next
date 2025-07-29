import Card from '@/components/Card';
import RouterButton from '@/components/RouterButton';
import { getCurrentTime } from '@/lib';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

interface Props {
  dt: string;
  products: Product[];
}

interface Product {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
}

export default function Page({ dt, products }: Props) {
  return (
    <main>
      <h1>Products</h1>
      <h4>{dt}</h4>
      <RouterButton />
      <ul>
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const dt = getCurrentTime();
  console.log('server side', dt);
  const { req, res, params, query, ...rest } = context;
  console.log({ params, query, rest });
  const response = await fetch('https://dummyjson.com/products');
  const reply = await response.json();
  console.log('cookie', req.headers.cookie);
  return {
    props: {
      dt,
      products: reply.products,
    },
  };
}
