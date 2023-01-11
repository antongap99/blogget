import axios from "axios";
import { useState, useEffect } from "react"
import { useSelector } from "react-redux";
import { URL_API } from '../api/const';
import { transformData } from "../utilities/transformData";

export const useBestPosts = (state) => {
  const [posts, setPosts] = useState(state);
  const token = useSelector(state => state.token.token);
 

  const setBestPosts = (state) => {
    setPosts(state);
  }

  useEffect(() => {
      axios.get(`${URL_API}/best`, {
        headers: {
          Authorization: `bearer ${token}`,
        }
      })
      .then(({data}) => {
        const postData = transformData(data)
        setBestPosts(postData);
        localStorage.setItem('posts', JSON.stringify(postData));
      })
      .catch((err) => {
        console.log(err.message);
      })
    }

  // }
  , [token])




  return [posts, setBestPosts]
}