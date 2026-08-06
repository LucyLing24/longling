import React from 'react';
import "../css/All.css"

function News() {
    const news =[
        {
            time: "2026.07",
            content: <>Started an internship at <strong className="news-ref">Tencent Hunyuan Foundation Model Team</strong>, working on post-training for coding agents and exploring aesthetic intelligence in AI-generated frontend and backend development. Excited to contribute to <strong className="news-ref">Hy3 & Hy4</strong> model～</>
        },
        {
            time: "2026.07",
            content: <>Co-authored <a href="#cradle" className="news-ref">Cradle of Success</a> was published at C&C '26! Excited to explore how Generative AI transforms human aspirations, stereotypes, and beliefs about the future.</>
        },
        {
            time: "2026.06",
            content: <>Released <a href="#huabu" className="news-ref">Huabu</a>, an AI-native canvas workspace developed during my internship at Microsoft Research Asia!!!</>
        },
        {
            time: "2026.06",
            content: <><strong className="news-ref">Graduated with honors</strong> from the Master's program at Tongji University! Grateful for the experiences and people that shaped my journey in research and design.</>
        },
        {
            time: "2026.03",
            content: <>Co-authored <a href="#clayscape" className="news-ref">ClayScape</a> was accepted to DIS '26! Excited about our exploration in GenAI-supported ceramic fabrication.</>
        },
        {
            time: "2026.03",
            content: <>My first-authored paper <a href="#chinese" className="news-ref">"Re-Tell the Fortune so I Can Believe It"</a> was accepted to CSCW '26! Thrilled to share our findings on how Chinese communities engage with GenAI divination.</>
        },
        {
            time: "2026.02",
            content: <>Had the opportunity to serve as a reviewer for CHI '26 Poster, DIS '26 Paper, and DIS '26 Pictorial.</>
        },
        {
            time: "2026.01",
            content: <>I started an internship at <strong className="news-ref">Microsoft Research Asia</strong> (MSRA).</>
        },
        {
            time: "2026.01",
            content: <>Co-first authored <a href="#vistoria" className="news-ref">Vistoria</a> was accepted to CHI '26! Looking forward to presenting our work in Barcelona and catching up with friends there~</>
        },
        {
            time: "2026.01",
            content: <>Had the opportunity to serve as a reviewer for IUI '26.</>
        },
        {
            time: "2025.11",
            content: <>Had the opportunity to serve as a reviewer for TEI '26.</>
        },
        {
            time: "2025.11",
            content: <>Glad that 2 papers for CHI '26 have received R&R and entered the next round.</>
        },
        {
            time: "2025.10",
            content: <>Co-authored <a href="#emo" className="news-ref">EmotiCrafter</a> poster will be published at ICCV '25! Welcome to take a look.</>
        },
        {
            time: "2025.10",
            content: <>Co-authored <a href="#tuntun" className="news-ref">TunTun Diary</a> poster was accepted by SIGGRAPH Asia '25. Congrats to the TunTun Diary team!</>
        },
        {
            time: "2025.08",
            content: <>Served as a reviewer of 8 papers for NeurIPS 2025 Creative AI Track.</>
        },
        {
            time: "2025.06",
            content: <>A co-authored full paper <a href="#image" className="news-ref">"An Image of Ourselves in Our Minds"</a> was published by CSCW '25!</>
        },
        {
            time: "2025.05",
            content: <>Awarded an AI PhD offer via the SII Summer Camp at Shanghai Innovation Institution.</>
        },
        {
            time: "2025.04",
            content: <>Happy to attend CHI '25 in Yokohama, Japan. Feel free to reach out~</>
        },
        {
            time: "2025.04",
            content: <>First-authored workshop paper <a href="#brain" className="news-ref">Brain Cache</a> was accepted by CHI '25 Workshop GenAICHI.</>
        },
        {
            time: "2024.11",
            content: <>Awarded Outstanding Graduate Student Scholarship in Tongji University.</>
        },
        {
            time: "2024.10",
            content: <>Attended CHI Play '24 and presented my first-authored full paper <a href="#sketchar" className="news-ref">Sketchar</a>! Good job!</>
        },
    ]

    const handleNewsRefClick = (e) => {
        if (e.target.classList.contains('news-ref')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="News" id="news">
            <div className="card-title">News
            </div>
            <ul className="news-list" onClick={handleNewsRefClick}>
                {news.map((item, index) => (
                    <li key={index}>
                        <div className="news-time">{item.time}</div>
                        <div className="news-content">{item.content}</div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default News;
