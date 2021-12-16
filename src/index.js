import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Navigate } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import MainView from './components/mainView';
import SignIn from './components/signin';
import SignUp from './components/signup';
import AddMovie from './components/addMovie';
import MovieDetails from './components/movieDetails';
import NotFound from './components/notFound';
import './css/scrollbar.css';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header />
                <Routes>
                    <Route path='/' element={<MainView />} />
                    <Route path='/details' element={<MovieDetails />} />
                    <Route path='/add' element={<AddMovie />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            <Footer />
        </React.StrictMode>
    </BrowserRouter>,

  document.getElementById('root')
);