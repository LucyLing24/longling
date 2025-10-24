import React from 'react';
import "../css/All.css"

export default function SelectedAwards() {
    const awards = [
        {
            text: "[2025] Excellent Master Scholarship in Tongji University ",
            highlight: "(Top 2%)",
        },
        {
            text: "[2024] American New Concept Design Art Award ",
            highlight: "(Second Prize)",
        },
        {
            text: "[2023] National Computer Design Competition ",
            highlight: "(Third Prize)",
        },
        {
            text: "[2022] Mathematical Contest In Modeling ",
            highlight: "(Meritorious Winner, Top 7.5%)",
        },

        {
            text: "[2021] Academic Excellence Scholarship in Soochow University ",
            highlight: "(Top 4%)",
        },
        {
            text: "[2020] Academic Pacesetter in Turing Class in Soochow University ",
            highlight: "(Top 3%)",
        },
    ];


    return (
        <div className="card" id="awards" style={{marginTop:"1rem"}}>
            <div className="card-title">Selected Awards</div>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award-item">
                        <span className="award-icon">✦ </span>
                        <span className="award-text">
                            {award.text}
                            <span className="award-highlight">{award.highlight}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
