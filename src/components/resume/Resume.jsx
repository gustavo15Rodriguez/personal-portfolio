import React from 'react';

import WorkExperience from './WorkExperience';
import Education from './Education';

const Resume = () => {
    return (
        <section id="resume" className="grey-section">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Resume</h5>
                    <h1>More of my credentials.</h1>
                    <p className="lead">
                        Below you will find a brief description of my career path.
                    </p>
                </div>   		
            </div> {/* /section-intro*/} 

            <WorkExperience />

            <Education />
        </section>
    );
}

export default Resume;