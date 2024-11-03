export const checkLoginToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};
