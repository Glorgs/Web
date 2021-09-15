export function getLanguage() {
    if (process.browser) {
        const language = (navigator || {}).language;
        return language?.split('-').shift();
    }
    return null;
}

export function translate(values) {
    if (!values)
    {return '';}

    const translations = getTranslations(values);
    if (translations === null) {
        return values;
    } else {
        if (getLanguage() === 'fr') {
            if (translations.fr && translations.fr.length > 0) {
                return translations.fr;
            }
        }
        return translations.en;
    }
}

function getTranslations(values) {
    if (!values)
    {return null;}

    if (Array.isArray(values)) {
        if (!values || values.length < 2)
        {return null;}
        return {
            fr: values[1],
            en: values[0],
        };
    } else if (typeof values === 'object' && values[getLanguage()]) {
        return values;
    } else if (typeof values === 'string' && isValidJSON(values)) {
        return JSON.parse(values);
    } else if (typeof values === 'string' && values.indexOf('|') >= 0) {
        const translations = values.split('|');
        if (translations.length < 2)
        {return null;}
        return {
            fr: translations[1],
            en: translations[0],
        };
    } else if (typeof values === 'string') {
        return null;
    } else {
        return {
            fr: '',
            en: '',
        };
    }
}

function isValidJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
