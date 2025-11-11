import React from 'react';
import "../css/All.css"

function News() {
    const news =[
        {
            time:"2025.11",
            content:"I served as a reviewer for TEI '26.",
        },
        {
            time:"2025.11",
            content:"Glad that 2 papers for CHI '26 have received R&R and entered the next round.",
        },
        {
            time:"2025.10",
            content:"A co-authored poster will be published in ICCV '25! Welcome to take a look.",
        },
        {
            time:"2025.10",
            content:"A co-authored poster was accepted by Siggraph Asia '25. Congrats to Tuntun Diary Project.",
        },
        {
            time:"2025.08",
            content:"I served as a reviewer of 8 papers for NeurIPS 2025 Creative AI Track.",
        },
        {
            time:"2025.06",
            content:"A co-authored full paper was published by CSCW '25!",
        },
        {
            time:"2025.05",
            content:"Awarded AI PhD offer via the SII Summer Camp at Shanghai Innovation Institution.",
        },
        {
            time:"2025.04",
            content:"Happy to attend CHI’25 in Yokohama, Japan. Feel free to reach out~",
        },
        {
            time:"2025.04",
            content:"A first-authored workshop paper was accepted by CHI '25 Workshop GenAICHI.",
        },
        {
            time:"2024.11",
            content:"Awarded Outstanding Graduate Student Scholarship in Tongji University.",
        },
        {
            time:"2024.10",
            content:"Attended CHI Play '24 and presented my first-authored full paper `Sketchar`! Good job!",
        }
    ]

    return (
        <div className="News" id="news">
            <div className="card-title">News</div>
            <ul className="news-list">
                {news.map((news) => (
                    <li>
                        <div className="news-time">{news.time}</div>
                        <div className="news-content">{news.content}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default News;
