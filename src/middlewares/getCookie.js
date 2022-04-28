export const getCookie = () => {
  const cookieName = "user";

  const cookieArr = document.cookie.split(";");

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    if (cookieName === cookiePair[0].trim()) {
      return cookiePair[1];
    } else {
      return "";
    }
  }
};
