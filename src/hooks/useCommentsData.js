import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCommentDataAsync } from "../store/comment/commentAction";

export const useCommentsData = (postId) => {
  const comment = useSelector(state => state.comment.commentData);
  const status = useSelector(state => state.comment.status);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestCommentDataAsync(postId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, token]);


  return [comment, status]
}