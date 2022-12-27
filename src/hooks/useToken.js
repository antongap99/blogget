/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals
import {useState, useEffect} from "react";

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    // после авторизации
    if(window.location.pathname.includes('/auth')){
      const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
      
      setToken(token);
    }
    // взять токен из local storage
    if(localStorage.getItem('bearer')){
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if(token){
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = (state) => {
    setToken(state);
    localStorage.removeItem('bearer');
  }

  return [token, delToken];
}