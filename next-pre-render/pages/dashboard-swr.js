import React from "react";
import useSWR from "swr";
const dashboardswr = () => {
  const { data, error } = useSWR("dashboard", async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Posts - {data.posts}</h2>
      <h2>Comments - {data.comments}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
      <h2>Views - {data.views}</h2>
    </>
  );
};

export default dashboardswr;
