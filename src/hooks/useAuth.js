import { useState, useEffect } from "react";
import { URL_API } from '../api/const';
import { useToken } from "./useToken";

export const useAuth = (state) => {
  const [auth, setAuth] = useState(state);

  const [token] = useToken('');


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
    })
  }, [token])

  return [auth, setAuth];
}