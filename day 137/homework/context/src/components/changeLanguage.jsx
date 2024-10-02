import React, { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

function Language() {
  const { lang, switchlang } = useContext(LanguageContext);

  return (
    <div>
      <h1>{lang == 'en' ? 'Hello!' : '¡Hola!'}</h1>
      <button onClick={switchlang}>{lang == 'en' ? 'Current language is english' : 'El idioma actual es español'}</button>
    </div>
  );
}

export default Language;