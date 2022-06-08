import React from 'react'

const News = ({news}) => {
  return (
      <>
      <h1>List of Articals.</h1>
      {news.map((news) => {
          return (
          <div key={news.id}>
            <h2>{news.title}</h2>
            <p>{news.body}</p>
            </div>
            )})}
      </>
  )
}

export default News

export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return {
        props: {
            news: data,
        },
    };
}