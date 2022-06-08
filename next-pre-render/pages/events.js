import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
const events = ({ data }) => {
  const [eventList, setEventList] = React.useState(data);
const router = useRouter(); 
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEventList(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of Events</h1>
      {eventList.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
          <p>{e.category}</p>
        </div>
      ))}
    </>
  );
};
export default events;

export async function getServerSideProps( context ) {
    const {query} = context;
    const {category} = query;
    const queryString =category ? `?category=sports` : '';
  const response = await fetch("http://localhost:4000/events?${queryString}");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
