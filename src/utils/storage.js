
function set(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

function get(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
}

function clear() {
  try {
    localStorage.clear();
  } catch (e) {
    console.log(e);
  }
}

const storage = {
  set,
  get,
  clear,
}

export default storage;