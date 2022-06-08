import { useRouter } from "next/router";
import React from "react";
import productId from "..";

const reviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h2>
        Review {reviewId} for Product {productId}
      </h2>
    </>
  );
};

export default reviewId;
