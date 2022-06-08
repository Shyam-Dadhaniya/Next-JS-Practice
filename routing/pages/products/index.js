import React, { useReducer } from "react";
import Link from "next/link";

const index = ({ productId = 100 }) => {
 
  return (
    <>
      <Link href="/"><h1>Back to Home Page</h1></Link>
      <Link href="/products/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/products/2">
        <h2>Product 2</h2>
      </Link>
      <Link href="/products/3" replace>
        <h2>Product 3</h2>
      </Link>
      <Link passHref href={`/products/${productId}`}>
        <h2>Product {productId} </h2>
      </Link>
    </>
  );
};

export default index;
