import { useState, useEffect } from "react";
import { URL_API } from '../api/const';
import {  useSelector } from 'react-redux';
import { deleteToken } from "../store/tokenReducer";


export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token.token);


  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then((response) => response.json()).then((data) => {
      const img = data.icon_img.replace(/\?.*$/, '');
      
      setAuth({
        name: data.name,
        img: img,
      })
    }).catch((err) => {
      console.log(err);
      // если время авторизации прошло
      setAuth({});
      deleteToken()
    })
  }, [token]);

  const clearAuth = () => {
    setAuth({});
    localStorage.removeItem('bearer');
  };


  return [auth, clearAuth];
}