import axios from "axios"
import { useState } from "react"
import {  useEffect } from "react"
import { useSelector } from "react-redux"
import { URL_API } from "../api/const"
import { transformData } from "../utilities/transformData"
// import { useDispatch, useSelector } from "react-redux";
// import { postDataRequestAsync } from "../store/postData/postDataAction";
// import { postDataSlice } from "../store/postData/postDataSlice";

export const useSearch = (value) => {
  const token = useSelector(state => state.token.token)
  const [searchPosts, setSearchPosts] = useState('')
  

  useEffect(() => {
    axios.get(`${URL_API}/search?q=${value}`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    })
      .then(({data}) => {
        console.log(data);
        setSearchPosts(transformData(data))
      })
      .catch((err) => {
        
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [token])




  return [searchPosts]
}
