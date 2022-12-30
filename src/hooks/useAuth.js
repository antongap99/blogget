import { useState, useEffect, useContext } from "react";
import { URL_API } from '../api/const';
import { tokenContext } from "../context/tokenContext";

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const {token, delToken} = useContext(tokenContext);


  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      }
    }).then((response) => response.json()).then((data) => {
      console.log(data);
      const img = data.icon_img.replace(/\?.*$/, '');
      setAuth({
        name: data.name,
        img: img,
      })
    }).catch((err) => {
      console.log(err);
      // если время авторизации прошло
      setAuth({});
      delToken('')
    })
  }, [token, delToken]);

  const clearAuth = () => {
    setAuth({});
    localStorage.removeItem('bearer');
  };


  return [auth, clearAuth];
}