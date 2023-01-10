/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals



export const setToken = (token) => {
  localStorage.setItem('bearer', token);
}

export const getToken = () => {
  let token = '';
  // после авторизации
  if (window.location.pathname.includes('/auth')) {
    token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
   

    setToken(token);
  }
  // взять токен из local storage
  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
  }




  return token;
}

