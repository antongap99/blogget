
import {URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE_STRING} from './const';


const searchParams = new URLSearchParams('');
const url =new URL(URL_AUTH);
console.log('url: ', url);
console.log('searchParams: ', searchParams);

searchParams.append('client_id', CLIENT_ID); 
searchParams.append('response_type', RESPONSE_TYPE); 
searchParams.append('state', RANDOM_STRING); 
searchParams.append('redirect_uri', REDIRECT_URI); 
searchParams.append('scope', SCOPE_STRING); 

export const auth_url =  `${URL_AUTH}${searchParams.toString()}`;