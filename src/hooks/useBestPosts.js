import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postDataRequestAsync } from "../store/postData/postDataAction";
import { postDataSlice } from "../store/postData/postDataSlice";

export const useBestPosts = () => {
  const posts = useSelector(state => state.postData.postData);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const setBestPosts = () => {
    dispatch(postDataSlice.actions.postClear());
  }

  useEffect(() => {
    dispatch(postDataRequestAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [token])




  return [posts, setBestPosts]
}