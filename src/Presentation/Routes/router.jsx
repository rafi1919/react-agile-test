import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
// import AuthGuardMiddleware from '../Domain/middlewere/Authguard.middleware.jsx';
import HomeView from '../Pages/Home/index';
import CountryDetailView from '../Pages/CountryDetail/index';
import MainLayout from '../Layout/main.layout';
import NotFound from '../Pages/NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomeView />} />
                <Route path="/country/:id" element={<CountryDetailView/>} />
                <Route path="/*" element={<NotFound />} />
            </Route> 
            </Routes>
        </Router>
    );
};

export default App;
