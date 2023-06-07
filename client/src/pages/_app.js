import '../styles/globals.css'
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

// Language Translator


// function MyApp({ Component, pageProps }) {
//   return (
//     <TranslationProvider>
//       <Component {...pageProps} />
//     </TranslationProvider>
//   );
// }
// Language Translator


// Before using language translator 
// import '@/styles/globals.css'
// import { Provider } from 'react-redux';
// import { persistor, store } from '../redux/store/index';
// import { PersistGate } from 'redux-persist/integration/react';
// function App({ Component}) {
//   return (
//     <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <Component />
//       </PersistGate>
//     </Provider>
//   );
// }

// export default App;
// Before using language translator 
// export default MyApp;
//Before import '@/styles/globals.css'
// import { Provider } from 'react-redux';
// import { wrapper } from '../redux/store/index';
// function App({ Component, ...rest }) {
//   const { store, props } = wrapper.useWrappedStore(rest);
//   const { pageProps } = props;
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default App;
