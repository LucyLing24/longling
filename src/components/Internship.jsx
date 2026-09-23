import React, {useState} from "react";
import "../css/Internship.css";
import bd from "../assets/logo/ByteDance.png"
import micro from "../assets/logo/Microsoft.png"
import idvx from "../assets/logo/idvx.png"
import narrow from "../assets/logo/narraw.png"
import future from "../assets/logo/future.png"
import cdi from "../assets/logo/cdi.png"
import spot from "../assets/logo/spot.png"
import ant from "../assets/logo/ant.png"
import tencent from "../assets/logo/tencent.png"
import {FaGithub, FaGlobe} from "react-icons/fa";

export default function Internship() {
    const experiences = [
        {
            type: "Work",
            organization: {
                name: "Tencent Hunyuan",
                link: "https://hunyuan.tencent.com/",
                logo: tencent
            },
            period: "2026.06 - present",
            role: "Research Intern, Foundation Model Team",
            location: "Shanghai, China",
            details: [
                <span>Post-training <strong>Hy3 & Hy4</strong> as <strong>coding agents</strong> for frontend and backend development and <strong>design tasks</strong>, and contributing to <strong>computer-use agent (CUA)</strong> post-training.</span>,
            ]
        },
        {
            type: "Work",
            organization: {
                name: "Microsoft Research Asia (MSRA)",
                link: "https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/",
                logo: micro
            },
            period: "2026.02 - 2026.06",
            role: "Research Intern",
            location: "Shanghai, China",
            projects: [
                {
                    name: <span><name>Huabu:</name> Microsoft's open-source AI-native canvas for human–agent collaboration</span>,
                    roles: ["#Core Builder (0→1)", "#Agent Harness", "#Interaction Design"],
                    link: [
                        <a
                            href="https://github.com/microsoft/Huabu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-icon-link"
                        >
                            <FaGithub/>
                        </a>
                    ]
                },
            ]
        },
        {
            type: "Work",
            organization: {
                name: "Ant Group Design",
                link: "https://www.antgroup.com/en",
                logo: ant
            },
            period: "2023.09 - 2023.12",
            role: "Consumer Product Strategy & Interaction Designer",
            location: "Shanghai, China",
            details: [
                <span>Shaped AIGC-driven consumer experiences for fintech and Gen Z lifestyle scenarios, from user research to product strategy and interaction design.</span>,
                <span>Won the <strong>Technical Innovation Award</strong> and <strong>Commercial Potential Award</strong> at both Ant Group and Tongji's College of Design and Innovation.</span>,
            ]
        },
        {
            type: "Work",
            organization: {
                name: "ByteDance Ads Infra - ML Infra",
                link: "https://www.bytedance.com/en/",
                logo: bd
            },
            period: "2022.10 - 2023.04",
            role: "Software Engineer Intern",
            location: "Hangzhou, China",
            details: [
                <span><name>Highlight:</name> Developed and maintained <strong>8 ML-infra platforms</strong> across <strong>5 teams</strong>, covering ad-creative management, data mining, sample modeling, and feature engineering. These platforms power ads across <strong>all ByteDance products</strong>, a business generating <strong>tens of billions of dollars</strong> in revenue.</span>,
            ]
        },
        {
            type: "Work",
            organization: {
                name: "Microsoft M365",
                link: "https://www.microsoft.com/en-us/microsoft-365",
                logo: micro
            },
            period: "2022.07 - 2022.10",
            role: "Software Engineer Intern, Service Reliability",
            location: "Suzhou, China",
            details: [
                <span><name>Highlight:</name> Built latency and API-health telemetry into an internal monitoring platform for M365 services, traced bottlenecks through live dashboards, and <strong>cut latency by 20%</strong> by optimizing component lifecycles.</span>,
                <span><name>Stack:</name> React, .NET / C#, SQL Server.</span>,
            ]
        },
        {
            type: "Work",
            organization: {
                name: "Microsoft M365",
                link: "https://www.microsoft.com/en-us/microsoft-365",
                logo: micro
            },
            period: "2021.07 - 2021.10",
            role: "Software Engineer Intern, Cloud Infrastructure",
            location: "Suzhou, China",
            details: [
                <span><name>Highlight:</name> Automated consistency checks for <strong>Azure ARM deployment templates</strong> with a JSON-tree diffing tool that surfaces drift across templates.</span>,
                <span>Shipped a <strong>Microsoft Teams</strong> bot on the Bot Framework SDK, giving the <strong>whole engineering team</strong> instant access to service-monitoring data.</span>
            ]
        },
        {
            type: "Research",
            organization: {
                name: "Studio for Narrative Spaces",
                link: 'https://recfro.github.io/',
                logo: narrow
            },
            period: "2023.06 - Present",
            role: <>Advisor: <a href={"https://raylc.org/"}>Ray LC</a>, City University of Hong Kong</>,
            location: "Hong Kong, China",
            projects: [
                {
                    name: <span><name>GenAI Fortune Telling:</name> CSCW '26 Honorable Mention paper and the <em>Cradle of Success</em> installation (C&C '26)</span>,
                    roles: ["#Research Lead", "#Qualitative Research", "#Art Installation"],
                    link: [
                        <a
                            href="https://recfro.github.io/fortune-telling/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-icon-link"
                        >
                            <FaGlobe/>
                        </a>
                    ]
                },
                { name: <span><name>Sketchar:</name> Generative AI for character design</span>, roles: ["#Research Lead","#Full-stack Development", "#UI/UX Design"] },
                { name: <span><name>Carbon Copy:</name> Dating platform</span>, roles: ["#Concept Design","#Full-stack Development"] }
            ]
        },
        {
            type: "Research",
            organization: {
                name: "iDVX Lab",
                link: "https://idvxlab.com/",
                logo: idvx
            },
            period: "2024.03 - 2026.09",
            role: <span>Advisor: <a href={"https://nancao.org/"}>Nan Cao</a>, Tongji University</span>,
            location: "Shanghai, China",
            projects: [
                {   name: <span><name>Capace:</name> Head-mounted haptic system for ADHD attention regulation</span>,
                    roles: ["#Research Lead", "#Hardware Prototyping","#System Development"] },
                { name: <span><name>Emoticrafter:</name> Emotion-controllable image generation (ICCV '25)</span>, roles: ["#Data Collection","#Algorithm Design"] }
            ]
        },
        {
            type: "Research",
            organization: {
                link:"https://thfl.tsinghua.edu.cn/en/",
                name:"The Future Laboratory",
                logo: future
            },
            period: "2023.09 - 2024.03",
            role: <span>Advisor: <a href={"https://www.milab.design/"}>Haipeng Mi</a>, Tsinghua University</span>,
            location: "Beijing, China",
            projects: [
                { name: <span><name>OZ Bot:</name> Agent workflow platform</span>, roles: ["#System Architecture", "#Development"] }
            ]
        },
        {
            type: "Research",
            organization: {
                name: "Spot Research Group",
                link: "https://from.so/",
                logo: spot
            },
            period: "2023.06 - 2023.09",
            role: <span>Advisor: <a href={"https://from.so/"}>Steve Oney</a>, University of Michigan</span>,
            location: "Ann Arbor, USA",
            projects: [
                { name: <span>
                        <name>Gamma:</name>
                        AI-assisted programming plugin
                    </span>, roles: ["#Tool Design", "#Development"],
                    link: [
                        <a
                            href="https://github.com/soney/gamma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-icon-link"
                        >
                            <FaGithub/>
                        </a>
                    ]
                }
            ]
        },
        {
            type: "Research",
            organization: {
                name: "Center for Digital Innovation",
                link: "https://tongjicdi.com/",
                logo: cdi
            },
            period: "2022.12 - 2024.03",
            role: <span>Advisor: <a href={"https://designschool.sustech.edu.cn/about/team/faculty/697.html"}>Xiaohua Sun</a>, Tongji University</span>,
            location: "Shanghai, China",
            projects: [
                { name: <span>
                        <name>DBS:</name>
                        Digital-twin system for deep brain stimulation surgery
                    </span>, roles: ["#3D Visualization", "#Development"],
                    link: [<a
                        href="https://github.com/LucyLing24/deep-brain-stimulation-surgeries-digital-twin-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon-link"
                    >
                        <FaGithub/>
                    </a>]
                },

                {
                    name: <span>
                        <name>Digital Human:</name>
                        Remote diagnosis with doctor digital humans
                    </span>, roles: ["#UI/UX Design", "#Prototyping"] ,
                link: [<a
                    href="https://github.com/LucyLing24/digital-human-face-and-body-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon-link"
                >
                    <FaGithub/>
                </a>]
                }
            ]
        },
    ];

    const [selectedTag, setSelectedTag] = useState("Work");

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    const filteredExperiences = selectedTag
        ? experiences.filter(exp => exp.type === selectedTag)
        : experiences;

    return (
        <div className="card" id="internship" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">Internship</div>
                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    <option key={"Work"} value={"Work"}>Work</option>
                    <option key={"Research"} value={"Research"}>Research</option>
                    {/*<option key={"Project"} value={"Project"}>Project</option>*/}
                </select>
            </div>
            <div className="timeline-container">
            {filteredExperiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className={`exp-type ${exp.type.toLowerCase()}`}>
                                {exp.type}
                            </div>
                            <div className="timeline-period-label">{exp.period.replace(' - ', '\n–\n')}</div>
                        </div>

                        <div className="timeline-content">

                            <div className="org-logo-container">
                                <img src={exp.organization.logo} alt={`${exp.organization.name} Logo`}
                                     className="org-logo"/>
                            </div>

                            <div className="exp-container">
                                    <div className="timeline-header">
                                        <div className="exp-organization">
                                            <a
                                                className="exp-organization-name"
                                                href={exp.organization.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{exp.organization.name}</a>
                                            <div className="exp-role">{exp.role}</div>
                                        </div>

                                        <div className="exp-period">
                                            <div>{exp.period}</div>
                                            <div className="exp-location">{exp.location}</div>
                                        </div>
                                    </div>


                                {exp.details && (
                                    <ul className="exp-details">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.projects && (
                                    <ul className="exp-projects">
                                        {exp.projects.map((proj, i) => (
                                            <li key={i}>

                                                <div className="project-roles">
                                                    {proj.name}
                                                    {proj.roles.map((role, idx) => (
                                                        <span key={idx} className="role-tag">
                                                            {role}
                                                        </span>
                                                    ))}
                                                    {proj?.link?.map((link) => (
                                                        <span className="role-link">{link}</span>
                                                    ))}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            </div>
                        </div>
                        ))}
            </div>
        </div>
    );
}
