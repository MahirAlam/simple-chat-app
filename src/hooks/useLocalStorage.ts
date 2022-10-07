import localStore from "../lib/LocalStore";
import { StrNum } from "../types/local";

const PREFIX = "simple-chat-";

function useLocalStorage(key: StrNum, defaultVal?: StrNum) {
  const mixedPrefix = PREFIX + key;
  const getVal = localStore.get(mixedPrefix);
  if (getVal === null && defaultVal) {
    localStore.set(mixedPrefix, defaultVal);
  }

  const setVal = (Val: StrNum) => {
    localStore.set(mixedPrefix, Val);
  };
  return [getVal, setVal];
}

export default useLocalStorage;
