import { atom } from "recoil";
export const LoginStatus = atom({
  key: "LoginStatus",
  default: true,
});
export const board = atom({
  key: "BoardStatus",
  default: false,
});
export const CodeToken = atom({
  key: "CodeToken",
  default: "token expired",
});
