import { useState, useEffect } from "react";
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from "../store/token/tokenAction";
import {authRequest, authRequestSuccess, authRequestError} from '../store/auth/authAction';
import axios from "axios";


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authRequest());
    axios.get(`${URL_API}/api/v1/me`, {  
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then(({data}) => {
      const img = data.icon_img.replace(/\?.*$/, '');
      const authdata = {
        name: data.name,
        img: img,
      }
      setAuth(authdata)

      dispatch(authRequestSuccess(authdata));
    }).catch((err) => {
      console.log(err.message);
      
      // если время авторизации прошло
      setAuth({});
      dispatch(deleteToken()) 
      dispatch(authRequestError(err));
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const clearAuth = () => {
    setAuth({});
    localStorage.removeItem('bearer');
  };


  return [auth, clearAuth];
}