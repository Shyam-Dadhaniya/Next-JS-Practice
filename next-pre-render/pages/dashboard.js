import React, { useEffect, useState } from "react";

const dashboard = () => {
  const [isLoding, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setLoading(false);
    }
    fetchDashboardData();
  }, []);

  return (
    <div>
      {isLoding ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Dashboard</h1>
          <h2>Posts - {dashboardData.posts}</h2>
          <h2>Comments - {dashboardData.comments}</h2>
          <h2>Followers - {dashboardData.followers}</h2>
          <h2>Following - {dashboardData.following}</h2>
          <h2>Views - {dashboardData.views}</h2>
        </>
      )}
    </div>
  );
};
export default dashboard;
