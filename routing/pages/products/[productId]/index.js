import React from 'react'
import {useRouter} from 'next/router'
const productId = () => {
    const router = useRouter();
    const productId = router.query.productId
  return (
    <h1>Product Detail {productId}</h1>
  )
}

export default productId