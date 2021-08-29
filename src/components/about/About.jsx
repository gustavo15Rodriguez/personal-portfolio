import React from 'react';

import ProfileDescription from './ProfileDescription';
import Skills from './Skills';

const About = () =>  {
    return (
        <section id="about">  
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                    <div className="intro-info">
                        <img src="/assets/images/profile.jpg" alt="Profile" />
                        <p className="lead">
                            I am a student of analysis and development of systems e information. 
                            I love the programming. I like to learn every day more. 
                        </p>
                    </div>   			
                </div>   		
            </div> {/* /section-intro */}

            <div className="row about-content">
                <ProfileDescription />
                <Skills />
            </div>
        </section>
    );
}

export default About;