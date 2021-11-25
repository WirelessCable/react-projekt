import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import MainView from './components/mainView';
import './css/scrollbar.css';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <MainView />
        <Footer />
    </React.StrictMode>,

  document.getElementById('root')
);