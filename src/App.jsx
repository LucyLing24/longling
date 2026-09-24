import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import './App.css';
import "./css/All.css"

function App() {
    const location = useLocation();
    const isFirstPage = useRef(true);

    useEffect(() => {
        window.gtag && window.gtag("config", "G-F053REKZP6", {
        });
    }, []);

    useEffect(() => {
        if (!location.hash) window.scrollTo(0, 0);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        if (isFirstPage.current) {
            isFirstPage.current = false;
            return;
        }
        window.gtag && window.gtag("event", "page_view", {
            page_path: location.pathname,
            page_title: document.title,
        });
    }, [location.pathname]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            {/*<Footer />*/}
        </div>
    );
}

export default App;
