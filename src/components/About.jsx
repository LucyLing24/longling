import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                Hi, I'm <strong>Long Ling</strong> (凌珑, aka Lucy Ling), a <strong>Ph.D. student</strong> jointly
                trained by <a href="https://en.tongji.edu.cn" target="_blank" rel="noopener noreferrer">
                Tongji University
            </a> and <a href="https://www.sii.edu.cn/" target="_blank" rel="noopener noreferrer">
                Shanghai Innovation Institute (SII)
            </a>, advised by <a href="https://guitaowufeng.github.io/" target="_blank" rel="noopener noreferrer">
                Prof. Tao Gui
            </a> at the <a href="https://nlp.fudan.edu.cn/" target="_blank" rel="noopener noreferrer">
                Fudan NLP Group
            </a>. I hold a master's in <strong>Interaction Design</strong> from Tongji's <a
                href="https://tjdi.tongji.edu.cn/?lang=en" target="_blank" rel="noopener noreferrer">
                College of Design and Innovation</a> and a bachelor's in <strong>Computer Science</strong>, and
                have worked closely with <a href="https://raylc.org/" target="_blank" rel="noopener noreferrer">
                Prof. Ray LC
            </a> (<a href="https://www.cityu.edu.hk/" target="_blank" rel="noopener noreferrer">CityU</a>) and <a
                href="https://toby.li/" target="_blank" rel="noopener noreferrer">
                Prof. Toby Jia-Jun Li
            </a> (<a href="https://www.nd.edu/" target="_blank" rel="noopener noreferrer">Notre Dame</a>).
                <br/><br/>
                My research centers on <strong>human–AI alignment</strong>: teaching <strong>LLMs and agents</strong> to
                capture the tacit expertise behind creative work, such as aesthetic judgment, design principles, and
                creative reasoning. I bring this to frontier models in industry, post-training coding agents
                at <strong>Tencent Hunyuan</strong> and building the open-source <strong>Huabu</strong> at
                <strong> Microsoft Research Asia</strong>. My work appears at CHI, CSCW (Honorable Mention), ICCV, DIS,
                and C&C.

                <div className="callout">Open to research collaborations. Feel free to reach out <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;
