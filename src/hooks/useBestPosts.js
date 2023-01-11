import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postClear, postDataRequestAsync } from "../store/postData/postDataAction";

export const useBestPosts = () => {
  const posts = useSelector(state => state.postData.postData);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const setBestPosts = () => {
    dispatch(postClear())
  }

  useEffect(() => {
    dispatch(postDataRequestAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [token])




  return [posts, setBestPosts]
}