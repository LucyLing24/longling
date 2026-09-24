import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Publications.css";
import { publications, tagColors, tagStyleMap, getPaperLinks, projectPath } from "../data/publications.js";
import { VenueTags, AuthorList, PaperTag } from "./PaperMeta.jsx";

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    return (
        <div className="publications" id="publications" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Publications
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                    style={{background: `${tagColors[selectedTag]}`}}
                >
                    <option value="">All</option>
                    {Object.keys(tagStyleMap).map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}

                </select>
            </div>

            {/*<div className="tag-filter">*/}
            {/*    <span*/}
            {/*        className={`${selectedTag === "Selected" ? "active" : ""} rainbow-tag`}*/}
            {/*        style={{color: tagStyleMap["Selected"]}}*/}
            {/*        onClick={() => handleTagClick("Selected")}*/}
            {/*    >*/}
            {/*            #Selected*/}
            {/*        </span>*/}
            {/*    <span*/}
            {/*        key={"In Submission"}*/}
            {/*        className={`${selectedTag === "In Submission" ? "active" : ""} submission-tag`}*/}
            {/*        onClick={() => handleTagClick("In Submission")}*/}
            {/*    >*/}
            {/*            #In Submission*/}
            {/*        </span>*/}
                {/*{Object.keys(tagStyleMap).map((tag) => {*/}
                {/*        if (tag === "Selected") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} rainbow-tag`}*/}
                {/*                style={{color: tagStyleMap[tag]}}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        } else if (tag === "In Submission") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} submission-tag`}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        }*/}
                {/*        // else return (<span*/}
                {/*        //     key={tag}*/}
                {/*        //     className={`filter-tag ${selectedTag === tag ? "active" : ""}`}*/}
                {/*        //     style={{color: tagStyleMap[tag]}}*/}
                {/*        //     onClick={() => handleTagClick(tag)}*/}
                {/*        // >*/}
                {/*        //     #{tag}*/}
                {/*        // </span>)*/}
                {/*    }*/}
                {/*)}*/}
            {/*</div>*/}

            <div className="publications-info">
                {/*My publications reflect my ongoing exploration of human–AI interaction and creativity support.*/}
                {/*You can click on the tags below to filter papers by topic or research area.*/}
                <div className="publications-info-small">* indicates equal contribution, and † denotes the advising
                    professor.</div>
            </div>


            <div className="publications-list">
                {filteredPublications.map((paper) => (
                    <div key={paper.id} className="publication-card" id={paper.id}>
                        <Link to={projectPath(paper.id)} className="publication-image-link">
                            <img
                                src={paper.image}
                                alt={paper.title}
                                className="publication-image"
                            />
                        </Link>

                        <div className="publication-content">
                            <VenueTags venues={paper.venues} />

                            <div className="publication-title-wrapper">
                                <Link to={projectPath(paper.id)} className="publication-title">
                                    {paper.title}
                                </Link>
                                <div className="abstract-popup">{paper.abstract}</div>
                            </div>

                            <div className="publication-authors">
                                <AuthorList authors={paper.authors} />
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag) => <PaperTag key={tag} tag={tag} />)}
                            </div>

                            <div className="publication-links">
                                {getPaperLinks(paper).map((link) => (
                                    <a key={link.key} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                ))}
                                {paper.links.msg && (
                                    <div className={"publications-msg"}>{paper.links.msg}</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
