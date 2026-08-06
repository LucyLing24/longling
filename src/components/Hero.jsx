import React from 'react';
import face from '../assets/face.png';
import "../css/Hero.css"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGoogleScholar,FaSquareXTwitter } from "react-icons/fa6";
import cv from "../assets/longling_cv.pdf"
import { BiSolidNote } from "react-icons/bi";

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:lucyling0224@gmail.com" },
        { icon: <FaGithub />, url: "https://github.com/LucyLing24" },
        { icon: <FaGoogleScholar />, url: "https://scholar.google.com/citations?user=YOUR_ID&user=wsRlBO4AAAAJ" },
        { icon: <FaSquareXTwitter />, url: "https://x.com/LucyLing24" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/lucyling24" },
        { icon: <BiSolidNote />, url: "https://www.xiaohongshu.com/user/profile/5d993e4f0000000001007c11" },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={face}
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="hero-meta">
                    <div className="meta-name">Long Ling 凌珑</div>
                    Master of Interaction Design
                    <div className="meta-description">
                        <div>🔮 AI & HCI Researcher</div>
                        <div>👩🏻‍💻 Full-stack Developer</div>
                        <div>🧚🏻‍♀️ UI & UX Designer</div>
                    </div>
                    <div className="meta-link">
                        <a className="meta-linkitem"
                           href="https://lucy-ling.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >Portfolio</a>
                        <a
                            className="meta-linkitem"
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV
                        </a>
                    </div>
                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/08/06</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
