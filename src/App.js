import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import AppRoute from "./components/AppRoute/AppRoute";
import {store} from "./helper/store";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import common_en from './i18n/en/common_en';
import common_vi from './i18n/vi/common_vi'

function App() {
    i18next.init({
        interpolation: {escapeValue: false},
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            vi: {
                common: common_vi
            },
        },
    });
    return (
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <AppRoute/>
            </I18nextProvider>
        </Provider>
    );
}

export default App;
