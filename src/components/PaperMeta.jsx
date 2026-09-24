import React from "react";
import { MY_NAME, AUTHOR_SYMBOLS, tagColors } from "../data/publications.js";

export function VenueTags({ venues }) {
    return (
        <div className="publication-venue">
            {venues.map((v, vi) => (
                <span key={vi} className={`venue-tag ${tagColors[v.type]}`}>
                    {v.name}
                </span>
            ))}
        </div>
    );
}

export function AuthorList({ authors }) {
    return authors.map((author, i) => {
        const name = author.name + (AUTHOR_SYMBOLS[author.role] || "");
        const label = author.name === MY_NAME ? (
            <strong style={{ color: "#F42E7A", fontWeight: 900 }}>{name}</strong>
        ) : (
            name
        );

        return (
            <span key={i}>
                {author.link ? (
                    <a href={author.link} target="_blank" rel="noopener noreferrer" className="author-link">
                        {label}
                    </a>
                ) : (
                    label
                )}
                {i < authors.length - 1 && ", "}
            </span>
        );
    });
}

export function PaperTag({ tag }) {
    if (tag === "Selected") {
        return <span className="tag-item-show rainbow-tag-all">#{tag}</span>;
    }
    if (tag === "Honorable Mention") {
        return <span className="tag-item-show award-tag-all">🏆 {tag}</span>;
    }
    if (tag === "In Submission") {
        return <span className="tag-item-show submission-tag-all">#{tag}</span>;
    }
    return <span className="tag-item-show" style={{ color: "#888" }}>#{tag}</span>;
}
