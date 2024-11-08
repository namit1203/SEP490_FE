export const checkLoginToken = () => {
  const token = localStorage.getItem("token");
  return token ? token : null;
};
export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}