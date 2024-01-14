import { atom } from "recoil";

export const queryAtom = atom({
  key: "searchQuery",
  default: {
    category: "All",
    text: "",
    maxPrice: 200000,
  },
});
