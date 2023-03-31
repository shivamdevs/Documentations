import React from 'react';
import Header from './components/Header/Header';
import "./app.css";

import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" exact element={<Index />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
};

export default App;