import React from 'react';

const Skills = () => {
    return (
        <div className="col-six tab-full">
            <h3>Skills</h3>

            <p>
                I am a technologist in analysis and development of information systems. 
                I am currently studying systems engineering. I work as a web developer.
            </p>

            <ul className="skill-bars">
                <li>
                    <div className="progress percent90"><span>90%</span></div>
                    <strong>HTML5</strong>
                </li>

                <li>
                    <div className="progress percent85"><span>85%</span></div>
                    <strong>JavaScript</strong>
                </li>

                <li>
                    <div className="progress percent75"><span>75%</span></div>
                    <strong>CSS3</strong>
                </li>

                <li>
                    <div className="progress percent60"><span>60%</span></div>
                    <strong>Python</strong>
                </li>

                <li>
                    <div className="progress percent50"><span>50%</span></div>
                    <strong>ReactJs</strong>
                </li>
                
                <li>
                    <div className="progress percent40"><span>40%</span></div>
                    <strong>MySQL</strong>
                </li>

                <li>
                    <div className="progress percent30"><span>30%</span></div>
                    <strong>Kotlin</strong>
                </li>
            </ul> {/* /skill-bars */}		
        </div>
    );
}

export default Skills;