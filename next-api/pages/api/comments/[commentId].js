import React from 'react'
import {useRouter} from 'next/router'
import { comments } from '../../../data/comments';
export default  function handler (req, res) {
   const {commentId} = req.query;
   if (req.method === "GET") {
       const comment = comments.find(c => c.id === parseInt(commentId));
       res.status(200).json(comment);
     
   } else if (req.method === "DELETE") {
       const comment = comments.find(c => c.id === parseInt(commentId));
       const index = comments.indexOf(comment);
       comments.splice(index, 1);
       res.status(200).json(comments);
   }
       
   }
//