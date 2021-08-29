import React from 'react';

const Education = () => {
    return (
        <div className="row resume-timeline">
            <div className="col-twelve resume-header">
                <h2>Education</h2>
            </div> {/* /resume-header */}

            <div className="col-twelve">
                <div className="timeline-wrap">
                    <div className="timeline-block">
                        <div className="timeline-ico">
                            <i className="fa fa-graduation-cap" />
                        </div>

                        <div className="timeline-header">
                            <h3>Systems Engineering</h3>
                            <p>October 2021 - Present</p>
                        </div>

                        <div className="timeline-content">
                            <h4>Uniremington</h4>
                            <p>Pereira, Risaralda, Colombia</p>
                        </div>
                    </div> {/* /timeline-block */}
                    
                    <div className="timeline-block">
                        <div className="timeline-ico">
                            <i className="fa fa-graduation-cap" />
                        </div>

                        <div className="timeline-header">
                            <h3>Technologist in analysis and development of information systems</h3>
                            <p>April 2017 - April 2019</p>
                        </div>

                        <div className="timeline-content">
                            <h4>SENA</h4>
                            <p>Dosquebradas, Risaralda, Colombia.</p>
                        </div>
                    </div> {/* /timeline-block */}
                </div> {/* /timeline-wrap */}   			
            </div> {/* /col-twelve */}
        </div>
    );
}

export default Education;