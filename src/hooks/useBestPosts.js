import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { URL_API } from '../api/const';
import { transformData } from "../utilities/transformData";

export const useBestPosts = (state) => {
  const [posts, setPosts] = useState(state);
  const token = useSelector(state => state.token);

  const setBestPosts = (state) => {
    setPosts(state);
  }

  useEffect(() => {
    // if(localStorage.getItem('posts')){
    //   setBestPosts(JSON.parse(localStorage.getItem('posts')));
    // } else {
      fetch(`${URL_API}/best`, {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
      .then((response) => response.json())
      .then((data) => {
        const postData = transformData(data)
        setBestPosts(postData);
        localStorage.setItem('posts', JSON.stringify(postData));
      })
      .catch((err) => {
        console.log(err);
      })
    }

  // }
  , [token])




  return [posts, setBestPosts]
}