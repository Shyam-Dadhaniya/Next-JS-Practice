import React from 'react'

const ArticalListByCategory = ({news, category}) => {
    console.log(news)
  return (
      <>
      <h1>Show news for category <i>{category}</i></h1>
      {news.map((n) => {
            return (
            <div key={n.id}>
                <h2>{n.title}</h2>
                <p>{n.body}</p>
                </div>
                )})}
      </>

  )
}

export default ArticalListByCategory

export async function getServerSideProps(context) {
    const { category } = context.query
    const {params, req, res, query} = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-cookie', ["name = Shyam"])
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    
    return {
        props: {
        news: data,
        category: category
        },
    }
    }  