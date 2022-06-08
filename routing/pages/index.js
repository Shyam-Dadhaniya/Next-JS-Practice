import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
function index() {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/products');
  }

  return (
    <>
      <div>Home Page</div>
      <Link href='/blog'>Blog</Link>
      <Link href='/products'>Product</Link>
      <button onClick={clickHandler}>Place Order</button>
    </>
  );
}

export default index;
