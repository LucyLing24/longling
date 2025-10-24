import React from 'react';
import "../css/All.css"; // 确保你的 CSS 路径正确

export default function Education() {
    const education = [
        {
            university: "Tongji University",
            degree: "Master of Interaction Design",
            college: "College of Design and Innovation",
            gpa: "3.91/4, 93/100",
            period: "2023.09 - Present",
            location: "Shanghai, China",
            courses: [
                { name: "Interaction Design", grade: 95 },
                { name: "Collaborative Design", grade: 95 },
                { name: "Open Design", grade: 97 },
                { name: "Algorithm Design", grade: 98 }
            ],
            advisor: { name: "Prof. Nan Cao", link: null } // 可选：如果导师有个人主页，可以在link中添加
        },
        {
            university: "Soochow University",
            degree: "Bachelor of Computer Science and Technology",
            gpa: "3.8/4, 90/100, top5%. Graduated with honor",
            period: "2019.09 - 2023.06",
            location: "Suzhou, China",
            courses: [
                { name: "Advanced Mathematics", grade: 95 },
                { name: "C++ Programming", grade: 98 },
                { name: "Probability and Statistics", grade: 92 },
                { name: "Algorithm Design", grade: 92 },
                { name: "Linear Algebra", grade: 91 }
            ],
            advisor: null // 此处没有导师信息
        }
    ];

    return (
        <div className="card" id="education" style={{marginTop:"1rem"}}>
            <div className="card-title">Education</div>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">

                        <div className="education-header">
                            <h3 className="education-university">{edu.university}</h3>
                            <div className="education-period">
                                {edu.period}
                                <div className="education-location">{edu.location}</div>
                            </div>
                        </div>

                        <div className="education-details">
                            <p className="education-degree">
                                {edu.degree}
                                {edu.college && `, ${edu.college}`}
                                {edu.gpa && <span className="education-gpa">, GPA: <strong>{edu.gpa}.</strong></span>}
                            </p>
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="education-courses">
                                <div>Courses:</div>
                                <ul>
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>
                                            {course.name} ({course.grade})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
