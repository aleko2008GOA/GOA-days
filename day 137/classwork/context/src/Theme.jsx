import React, {useContext} from "react"
import { ThemeContext } from "./context/ThemeContext.jsx"

function Theme() {
  const Theme = useContext(ThemeContext);

  return (
    <>
      <div style = {{backgroundColor: Theme}}><h1>Hello!</h1></div>
    </>
  )
}

export default Theme;
