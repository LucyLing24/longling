import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
    FaArrowLeft, FaArrowRight, FaBook, FaCode, FaDesktop, FaExternalLinkAlt, FaFileAlt, FaFilePdf,
    FaGithub, FaGlobe, FaGraduationCap, FaPlay, FaYoutube,
} from "react-icons/fa";
import { SiArxiv } from "react-icons/si";
import "../css/Publications.css";
import "../css/Project.css";
import { publications, getPaperLinks, getPublication, projectPath } from "../data/publications.js";
import { VenueTags, AuthorList, PaperTag } from "../components/PaperMeta.jsx";

const LINK_ICONS = {
    pdf: <FaFilePdf/>,
    thesis: <FaGraduationCap/>,
    acm: <FaBook/>,
    arxiv: <SiArxiv/>,
    slide: <FaFileAlt/>,
    github: <FaGithub/>,
    web: <FaGlobe/>,
    poster: <FaFileAlt/>,
    code: <FaCode/>,
    demo: <FaDesktop/>,
    short: <FaYoutube/>,
    page: <FaGlobe/>,
    video: <FaPlay/>,
};

const DEFAULT_TITLE = "Long Ling | Research";

function splitTitle(title) {
    const i = title.indexOf(": ");
    return i === -1 ? [title, ""] : [title.slice(0, i), title.slice(i + 2)];
}

function isLocalVideo(url) {
    return typeof url === "string" && !/^https?:/.test(url) && url.endsWith(".mp4");
}

export default function ProjectPage() {
    const { id } = useParams();
    const paper = getPublication(id);

    useEffect(() => {
        if (paper) document.title = `${splitTitle(paper.title)[0].replace(/"/g, "")} | Long Ling`;
        return () => { document.title = DEFAULT_TITLE; };
    }, [paper]);

    if (!paper) return <Navigate to="/#publications" replace />;

    const [heading, subtitle] = splitTitle(paper.title);
    const index = publications.indexOf(paper);
    const prev = publications[index - 1];
    const next = publications[index + 1];
    const links = getPaperLinks(paper);
    const related = (paper.related || []).map(getPublication).filter(Boolean);
    const authorNotes = [
        paper.authors.some((a) => a.role === "first" || a.role === "second") && "* equal contribution",
        paper.authors.some((a) => a.role === "advisor") && "† advising professor",
    ].filter(Boolean);
    const localVideo = isLocalVideo(paper.links.video) ? paper.links.video : null;

    return (
        <main className="project-page">
            <div className="project-container">
                <Link to={`/#${paper.id}`} className="project-back">
                    <FaArrowLeft/> Back to Publications
                </Link>

                <div className="project-meta-row">
                    <VenueTags venues={paper.venues} />
                    {paper.award && <span className="project-award-pill">🏆 {paper.award}</span>}
                </div>

                <h1 className="project-heading">{heading}</h1>
                {subtitle && <p className="project-subtitle">{subtitle}</p>}

                <div className="project-authors">
                    <AuthorList authors={paper.authors} />
                </div>
                {authorNotes.length > 0 && (
                    <div className="project-author-note">{authorNotes.join(" · ")}</div>
                )}

                {(paper.pages?.length > 0 || links.length > 0) && (
                    <div className="project-links">
                        {paper.pages?.map((page) => (
                            <a key={page.url} href={page.url} target="_blank" rel="noopener noreferrer"
                               className="project-link project-link-primary">
                                <FaExternalLinkAlt/> {page.label}
                            </a>
                        ))}
                        {links.map((link) => (
                            <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer"
                               className="project-link">
                                {LINK_ICONS[link.key]} {link.label}
                            </a>
                        ))}
                    </div>
                )}
                {paper.links.msg && <div className="project-msg">{paper.links.msg}</div>}

                <figure className="project-hero">
                    <img src={paper.image} alt={paper.title}/>
                </figure>

                <section className="project-section">
                    <h2 className="project-section-title">Abstract</h2>
                    {paper.abstract.split(/\n\s*\n/).map((para, i) => (
                        <p key={i} className="project-abstract">{para.trim()}</p>
                    ))}
                </section>

                {(paper.youtube || localVideo) && (
                    <section className="project-section">
                        <h2 className="project-section-title">Video</h2>
                        <div className="project-video">
                            {paper.youtube ? (
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${paper.youtube}`}
                                    title={`${heading} video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <video src={localVideo} controls preload="metadata" poster={paper.image}/>
                            )}
                        </div>
                    </section>
                )}

                {paper.exhibitions?.length > 0 && (
                    <section className="project-section">
                        <h2 className="project-section-title">Exhibitions</h2>
                        <ul className="project-exhibitions">
                            {paper.exhibitions.map((ex) => (
                                <li key={ex.title}>
                                    <div className="project-exhibition-title">
                                        {ex.url ? (
                                            <a href={ex.url} target="_blank" rel="noopener noreferrer">{ex.title}</a>
                                        ) : ex.title}
                                    </div>
                                    <div className="project-exhibition-meta">
                                        {[ex.place, ex.date].filter(Boolean).join(" · ")}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className="project-section">
                    <h2 className="project-section-title">Topics</h2>
                    <div className="publication-tags">
                        {paper.tags.map((tag) => <PaperTag key={tag} tag={tag}/>)}
                    </div>
                </section>

                {related.length > 0 && (
                    <section className="project-section">
                        <h2 className="project-section-title">Related Projects</h2>
                        <div className="project-related">
                            {related.map((r) => (
                                <Link key={r.id} to={projectPath(r.id)} className="project-related-card">
                                    <img src={r.image} alt={r.title}/>
                                    <div>
                                        <VenueTags venues={r.venues}/>
                                        <div className="project-related-title">{r.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <nav className="project-pager">
                    {prev ? (
                        <Link to={projectPath(prev.id)} className="project-pager-item">
                            <span className="project-pager-label"><FaArrowLeft/> Previous</span>
                            <span className="project-pager-title">{splitTitle(prev.title)[0]}</span>
                        </Link>
                    ) : <span/>}
                    {next ? (
                        <Link to={projectPath(next.id)} className="project-pager-item project-pager-next">
                            <span className="project-pager-label">Next <FaArrowRight/></span>
                            <span className="project-pager-title">{splitTitle(next.title)[0]}</span>
                        </Link>
                    ) : <span/>}
                </nav>
            </div>
        </main>
    );
}
