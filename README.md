Features
Auth
- [ ] Login 
    - [x] frontend form validation
    - [x] backend validation
    - [ ] password hash
- [ ] Register
    - [x] password hash
    - [x] Jwt Token
    - [x] Env setup
- [x] Change Password
- [x] Nav Bar Complete
- [x] Language Switcher Complete  Initialization 
- [x]  Nepali Date Picker
Firm Registration
- [x] Creating Api for Registration
- [] 



# Nepali To English Swithcer in NextJs Project
    If we are Making Governmet Project or Supporting Two Language, Withoud Using any Packages We can Switch Between One Language to Another. We should use json files to translate languge, some changes on _App.js files , and Language translation code. Following is the Example.
### Initial Code on _App.js

```javascript
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store/index';
function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
```
### Modify by following Code on _App.js
In following code, Translation file is imported which is in lib folder of our project, it can be anywhere or may be different.
```javascript
import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { persistor, store } from '../redux/store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { TranslationProvider } from "./lib/useTranslation";
function App({ Component,pageProps}) {
  return (
    <TranslationProvider>
    <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
    
      <Component {...pageProps}/>
    
      </PersistGate>
      
    </Provider>
    </TranslationProvider>
  );
}

export default App;
```
In the Above code we are used redux and redux-persist for local storage, You can can also install these packges.
### Install these package if you dont have.
```bash
    npm install redux
    npm install redux-persist
```
or directly

```bash
    npm install redux redux-persist
```
### Make Json file for translation 
    Here we are making Language Translation file in json format for both nepali and English. Before making these files. Create a Folder name "locales" inside it, make en.json and ne.json file.
#### Code for en.json file
```javascript
  {
    "home": "Home",
    "about": "About",
    "admin": "Admin",
      "initial setup": "Initial Setup",
      "first name": "First Name",
      "middle name": "Middle Name",
      "last name": "Last Name",
  }
```
#### Code for ne.json file
```javascript
    {
    "home": "गृहपृष्ठ",
    "about": "बारेमा",
    "admin": "मुख्य",
  
      "initial setup": "शुरुको सेटिङ्ग",
      "first name": "पहिलो नाम:",
      "middle name": "विचको नाम:",
  }
```
### Create UseTranslation file
 Inside your client folder, make a folder libs , inside it, make a useTranslation.js file and insert following code.
 ```javascript
    import { createContext, useContext,useEffect, useState } from "react";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (locale) => {
    const translation = await import(`../../locales/${locale}.json`);

    setTranslations(translation);
  };

  useEffect(() => {
    loadTranslations(locale);
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const { locale, setLocale, translations } = useContext(TranslationContext);

  function t(key) {
    return translations[key] || key;
  }

  return { t, locale, setLocale };
}

 ```
### How to Use?
    Now we have all files. We should import Where we are changing language,
    The best way to keep language switcher button at top of file.or in navbar

```javascript
    //import at top , import redux also
    import { useTranslation } from "../lib/useTranslation";
    //import below function you are using.
    const { t, locale, setLocale } = useTranslation();
     const handleLanguageChange = (e) => {
    setLocale(e.target.value);
  };
  // Insert at Nav bar 
            <li>
          <select value={locale} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ne">नेपाली</option>
          </select>
        </li>
```
#### How to Use?
On our Element , According to types , or field,
we can use t("permanent address"),or {t("permanent address"),}