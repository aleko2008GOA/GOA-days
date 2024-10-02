import { useState } from 'react';
import React from 'react';
import { LanguageContext } from './context/languageContext';
import Language from './components/changeLanguage';

function LanguageProvider() {
    const [lang, setLang] = useState('en');
    function switchlang(){
        setLang(lang == 'en' ? 'es' : 'en');
    }

    return (
        <LanguageContext.Provider value = {{ lang, switchlang }}>
            <Language />
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;