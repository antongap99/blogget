import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  authLogout, authRequestAsync } from '../store/auth/authAction';


export const useAuth = () => {
  const auth = useSelector(state => state.auth.data)
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const clearAuth = () => {
    dispatch(authLogout())
    localStorage.removeItem('bearer');
  };


  return [auth, loading, clearAuth];
}