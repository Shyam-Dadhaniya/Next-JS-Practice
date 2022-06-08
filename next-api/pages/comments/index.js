import React, { useState } from "react";

const index = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({});
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
  };
  const deleteHandler = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
    });
    const data = await response.json();
    setComments(data);
    };
    
  return (
    <>
      <input
        type="text"
        value={comment.text}
        onChange={(e) => setComment({ ...comment, text: e.target.value })}
      />
      <button onClick={submitHandler}>Submit</button>
      <button onClick={fetchComments}>Load Commnets</button>
      {comments.map((e) => (
        <div key={e.id}>
          <h2>{e.text}</h2>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default index;
