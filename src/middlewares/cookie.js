import { parseJwt } from "./parseJWT";

export const createUserCookie = (data, navigate) => {
  const token = data.token;
  const userData = parseJwt(token);
  console.log(userData)

//   const key = 'user';
//   const value = encodeURIComponent(token);
//   document.cookie = `${key}=${value};path=/`

//   navigate('/')
};
