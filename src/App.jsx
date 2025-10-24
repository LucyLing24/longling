import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Internship from './components/Internship';
import Footer from './components/Footer';
import './App.css';
import "./css/All.css"
import News from "./components/News.jsx";
import SelectedAwards from "./components/SelectedAwards.jsx";
import Visitor from "./components/Visitor.jsx";
import Education from "./components/Education.jsx";
import More from "./components/More.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-layout">
                <div className="left-hero">
                    <Hero />
                </div>
                <div className="right-content">
                    <div style={{margin: "2rem"}}>
                        <About />
                        <News />
                        <Publications />
                        <Internship />
                        <Education />
                        <SelectedAwards />
                        <More />
                    </div>
                    <Visitor />
                </div>
            </div>
            {/*<Footer />*/}
        </div>
    );
}

export default App;
