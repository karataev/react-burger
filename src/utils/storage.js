
function set(key, value) {
  localStorage.setItem(key, value);
}

function get(key) {
  return localStorage.getItem(key);
}

function clear() {
  localStorage.clear();
}

const storage = {
  set,
  get,
  clear,
}

export default storage;