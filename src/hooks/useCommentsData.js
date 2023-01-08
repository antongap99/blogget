import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL_API } from "../api/const";

export const useCommentsData = (postId) => {
  const [comment, setComment] = useState(null);
  const token = useSelector(state => state.token);

  useEffect(() => {
    fetch(`${URL_API}/comments/${postId}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(resp => {
        if (resp.status === 401) {
          throw new Error(resp.status);
        }
        return resp.json();
      })
      .then(postData => {
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