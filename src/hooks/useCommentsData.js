import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL_API } from "../api/const";

export const useCommentsData = (postId) => {
  const [comment, setComment] = useState(null);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    axios.get(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: postData}) => {
        const [
          { data: {
            children: [{ data: { author, preview: { images: [{ source: { url } }] } } }]
          } },
          { data: {
            children: [{ data: { author: authorComments, body } }]
          } },
        ] = postData


        setComment({
          author,
          authorComments,
          url,
          body,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [postId, token]);


  return [comment]
}