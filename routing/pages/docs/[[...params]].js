import { useRouter } from "next/router";
import React from "react";

const param = () => {
  const router = useRouter(); 
  const {param = []} = router.query
  console.log(param)

  if (param.length === 2 ) {
    return(
      <h1>Viewing docs for feature {param[0]} and concept {param[1]}</h1>
    )
  } else if(param.length === 1 ) {
    return <h1>Viewing docs for feature {param[0]}</h1>
  }
  return <div>Docs Home Page</div>;
};

export default param;