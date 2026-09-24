import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import News from "../components/News.jsx";
import Publications from "../components/Publications";
import Internship from "../components/Internship";
import Education from "../components/Education.jsx";
import SelectedAwards from "../components/SelectedAwards.jsx";
import More from "../components/More.jsx";
import Visitor from "../components/Visitor.jsx";

export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) return;
        // Wait a frame so the section exists at its final position after route change.
        const frame = requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
        return () => cancelAnimationFrame(frame);
    }, [hash]);

    return (
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
    );
}
