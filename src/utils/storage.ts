
function set(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

function get(key: string): string | undefined {
  try {
    return localStorage.getItem(key) ?? undefined;
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