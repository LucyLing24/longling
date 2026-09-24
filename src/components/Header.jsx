import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Header.css";
import logo from "../assets/logo.png";

const NAV = [
    { id: "about", label: "About" },
    { id: "news", label: "News" },
    { id: "publications", label: "Publications" },
    { id: "internship", label: "Internship" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "more", label: "More" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleClick = (id) => {
        setMenuOpen(false);
        if (pathname !== "/") {
            navigate(`/#${id}`);
            return;
        }
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleHome = () => {
        setMenuOpen(false);
        if (pathname !== "/") navigate("/");
        else window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-container">
                <div className="header-name" onClick={handleHome} style={{ cursor: "pointer" }}>
                    <img src={logo} alt="logo" style={{ width: "36px", marginRight: 12 }} />
                    <div className="name-main">Long L<span className="fancy-i">i</span>ng</div>
                </div>

                {/* 汉堡按钮 */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </button>

                {/* 导航栏 */}
                <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className="nav-item"
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
