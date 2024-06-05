import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
// import AuthGuardMiddleware from '../Domain/middlewere/Authguard.middleware.jsx';
import HomeView from '../Pages/Home/view';
import WorldView from '../Pages/World/view';
import WorldDetailView from '../Pages/WorldDetail/view';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/world" element={<WorldView/>} />
                <Route path="/world/:id" element={<WorldDetailView/>} />


                {/* <Route element={<AuthGuardMiddleware isLogin={isLogin} />}>
                    <Route element={<MainLayout />}>
                        <Route path="/crud" element={<CrudPage />} />
                        <Route path="/counter" element={<CounterPage />} />
                    </Route>
                </Route> */}
            </Routes>
        </Router>
    );
};

export default App;
