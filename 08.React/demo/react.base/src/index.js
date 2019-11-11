import React from 'react';
import ReactDOM from 'react-dom';
import intl from 'react-intl-universal'
import Router from '@configs/router.config'
import { Provider, } from 'react-redux'

import configureStore from './store';

// import * as serviceWorker from './serviceWorker';

// import zh from './i18n/zh.js'
import en from './i18n/en.js'

let navLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.browserLanguage
if (!navLang) navLang = 'en-us'
const lang = localStorage.getItem('lang') || navLang.split('-')[0]
localStorage.setItem('lang', lang)

intl.init({
  currentLocale: 'en',
  locales: {
    // zh,
    en,
  },
  warningHandler: (message, detail) => {
    console.log(message, detail)
  },
})

const store = configureStore({
  markTitle: {
    isLocking: 0,
  },
  globalData: {
    showLeftMenu: false,
  },
});

String.prototype.macFormat = function () {
  let str = this.toUpperCase();
  if (str.length === 12) {
    str = str.replace(/(.{2})/g, '$1-');
    str = str.substr(0, 17);
  } else {
    str = str.replace(/-/g, ':');
  }
  return str;
}

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('page-wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
