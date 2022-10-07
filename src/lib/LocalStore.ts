import { StrNum } from "../types/local";

function remove(key: StrNum) {
  localStorage.removeItem(key.toString());
}

function get(key: StrNum) {
  const value = localStorage.getItem(key.toString());
  if (!value) {
    return null;
  }

  try {
    // Returns an object if stored value is JSON
    return JSON.parse(value);
  } catch (error) {
    // Returns plain string if stored value is not JSON
    return value;
  }
}

function set(key: StrNum, value: StrNum) {
  if (typeof value === "string") {
    localStorage.setItem(key.toString(), value);
  } else {
    localStorage.setItem(key.toString(), JSON.stringify(value));
  }
}

export default {
  get,
  set,
  remove,
};
