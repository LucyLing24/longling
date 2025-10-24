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
import {FaGithub} from "react-icons/fa";

export default function Internship() {
    const experiences = [
        {
            type: "Work",
            organization: {
                name: "Ant Group Design",
                link: "https://www.antgroup.com/en",
                logo: ant
            },
            period: "2023.09 - 2023.12",
            role: "toC Product Strategy & Interaction Designer",
            location: "Shanghai, China",
            projects: [
                { name: <span>AIGC in financial service and investor education</span>, roles: ["#User Research", "#UI/UX Design","#Prototyping"] },
                { name: <span><name>Raspberry Music Festival:</name>Design for Gen Z onsite musical experience</span>, roles: ["#User Research", "#UI/UX Design"] },
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
            role: "FE Engineer Intern, serving as a developer for multiple platforms.",
            location: "Hangzhou, China",
            details: [
                <span><name>Highlight:</name> Developed platforms to support advertising materials management, data mining, sample modeling, feature engineering, etc. Collaborated <strong>across 5 teams</strong>, maintained a total of <strong>8 advertising platforms</strong>, of which 3 were independently developed from scratch. These platforms provide advertising services for all the ByteDance’s products to help <strong>achieve
                    tens of billions of dollars</strong> in revenue.</span>,
                <span><name>Tools:</name> Used <strong>Figma</strong> for website design, and used <strong>React + TypeScript</strong> for development.</span>,
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
            role: "Software Engineer Intern, optimizing the monitoring platform",
            location: "Suzhou, China",
            details: [
                <span><name>Highlight:</name> Embedded time logger tool to monitor web latency and success rate of APIs. Utilized visualization panel to identify solutions for reducing latency. By optimizing component lifecycles, <strong>reduced latency by 20%.</strong></span>,
                <span><name>Tools:</name> The front-end used <strong>React</strong> class components, the back-end used <strong>.NET
                    + C#</strong>, and the database was <strong>Microsoft SQL Server</strong>.</span>,
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
            role: "Software Engineer Intern, assisting in the construction of various basic services.",
            location: "Suzhou, China",
            details: [
                <span>Improved XAM ARM deployment template diagnostic process. A script was written based on the JSON tree comparison algorithm for determining consistency, displaying the differences between various templates.</span>,
                <span>Adopted the <strong>Bot Framework SDK</strong>, added custom components to the chat robot. Embed the bot in Teams, allowing <strong>whole team developers</strong> to quickly obtain the required monitoring information.</span>
            ]
        },
        {
            type: "Research",
            organization: {
                name: "Intelligent Big Data Visualization Lab",
                link: "https://idvxlab.com/",
                logo: idvx
            },
            period: "2024.03 - Present",
            role: <span>Advisor: <a href={"https://nancao.org/"}>Nan Cao</a>, Tongji University</span>,
            location: "Shanghai, China",
            projects: [
                {   name: <span><name>Capace: </name> Attention Reminder Hat for ADHD</span>,
                    roles: ["#Research Lead", "#Hardware Prototyping","#System Development"] },
                { name: "Survey for Generative AI Tools", roles: ["#Research Lead","#Data Collection", "#Analysis"] },
                { name: <span><name>Emoticrafter: </name> Algorithm for Generating Emotional Images</span>, roles: ["#Data Collection","#Algorithm Design"] }
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
                { name: <span><name>Sketchar:</name> Generative Tool for Character Design</span>, roles: ["#Research Lead","#Full-stack Development", "#UI/UX Design"] },
                { name: <span><name>Carbon Copy:</name>  Dating Platform</span>, roles: ["#Concept Design","#Full-stack Development"] }
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
                { name: <span><name>OZ Bot:</name> Agent Workflow Platform</span>, roles: ["#Front-end Development", "#System Architecture"] }
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
                        AI-assisted Programming Plugin
                    </span>, roles: ["#Development", "#Tool Design",],
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
                        Deep Brain Stimulation Surgeries Digital-twin System
                    </span>, roles: ["#Frontend Development", "#3D Visualization"],
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
                        Doctor Digital Human Remote Diagnosis System
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
