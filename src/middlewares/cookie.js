import { parseJwt } from "./parseJWT";

export const createUserCookie = (data, navigate) => {
  const token = data.token;
  const userData = parseJwt(token);

  const key = 'user';
  const value = encodeURIComponent(token);
  document.cookie = `${key}=${value};path=/`

  console.log(userData.role);

  if(userData.role === 'user') navigate('/student_page');
  if(userData.role === 'teacher') navigate('/teacher_table');
};
