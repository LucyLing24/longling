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
            </a>. I am fortunate to be advised by <a href="https://guitaowufeng.github.io/" target="_blank"
                                                     rel="noopener noreferrer">
                Prof. Tao Gui
            </a> at the <a href="https://nlp.fudan.edu.cn/" target="_blank" rel="noopener noreferrer">
                Fudan NLP Group
            </a>. I received my master's degree in <strong>Interaction Design</strong> from <a
                href="https://tjdi.tongji.edu.cn/?lang=en" target="_blank" rel="noopener noreferrer">
                College of Design and Innovation</a>, Tongji University, and my bachelor's degree
                in <strong>Computer Science and Technology</strong>.
                I have also been conducting research under the supervision of <a href="https://raylc.org/" target="_blank"
                                                                      rel="noopener noreferrer">
                Prof. Ray LC
            </a> at <a href="https://www.cityu.edu.hk/" target="_blank" rel="noopener noreferrer">
                City University of Hong Kong
            </a> and <a href="https://toby.li/" target="_blank" rel="noopener noreferrer">
                Prof. Toby Jia-Jun Li
            </a> at <a href="https://www.nd.edu/" target="_blank" rel="noopener noreferrer">
                University of Notre Dame.
            </a>
                <br/><br/>
                {/* My research interests focus on <strong>human–AI interaction for supporting human creativity</strong> to
                achieve better cognitive support and creative collaboration, by designing interaction forms and
                generating contents that align with human intention, emotion, and cognition. */}

                My research focuses on <strong>human–AI alignment</strong>, exploring how AI systems can acquire and represent <strong>human expertise</strong> to better support creative work. Specifically, I study how tacit and subjective forms of human knowledge, such as aesthetic judgment, design principles, and creative reasoning, can be incorporated into <strong>large language models and agentic systems</strong>.


                <div className="callout">I am always open to research collaborations. Please feel free to contact me about any potential opportunities <strong>: )</strong></div>
            </div>
        </div>
    );
}

export default About;
