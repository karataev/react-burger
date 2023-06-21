export const checkResponse = (res) => {
  if (res.ok) return res.json();
  if (res.status === 500) return Promise.reject({message: '500 - Internal server error'});
  return res.json().then((data) => Promise.reject(data));
};
