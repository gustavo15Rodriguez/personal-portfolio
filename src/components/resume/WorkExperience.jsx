import React from 'react';

const WorkExperience = () => {
    return (
        <div className="row resume-timeline">
            <div className="col-twelve resume-header">
                <h2>Work Experience</h2>
            </div> {/* /resume-header */}
            <div className="col-twelve">
                <div className="timeline-wrap">
                    <div className="timeline-block">
                        <div className="timeline-ico">
                            <i className="fa fa-briefcase" />
                        </div>

                        <div className="timeline-header">
                            <h3>Development analyst</h3>
                            <p>November 2020 - Present</p>
                        </div>
                        
                        <div className="timeline-content">
                            <h4>Becall Group</h4>
                            <p>
                                Design and update web applications from the client side according 
                                to the established requirements. I handle reactjs and laravel on 
                                the server side.
                            </p>
                        </div>
                    </div> {/* /timeline-block */}

                    <div className="timeline-block">
                        <div className="timeline-ico">
                            <i className="fa fa-briefcase" />
                        </div>

                        <div className="timeline-header">
                            <h3>Sena Apprentice</h3>
                            <p>October 2019 - April 2020</p>
                        </div>

                        <div className="timeline-content">
                            <h4>VeriTran Colombia</h4>
                            <p>
                                Design a program called "changelog" to manage commits based 
                                on the "git log" command of the git software. This program 
                                can be customized in any way you want. It was implemented 
                                in python.
                            </p>
                        </div>
                    </div> {/* /timeline-block */}
                </div> {/* /timeline-wrap */}   			
            </div> {/* /col-twelve */}
        </div>
    );
}

export default WorkExperience;