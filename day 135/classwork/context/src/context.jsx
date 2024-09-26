import { createContext } from "react";

const ThemeContext = createContext({
    mode: "",
    fname: "",
    lname: ""
});

export { ThemeContext };