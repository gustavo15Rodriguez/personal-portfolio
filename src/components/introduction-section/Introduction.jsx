import React from 'react';

import SocialMedia from '../social-media/SocialMedia';

const Introduction = () => {
    return (
        <section id="intro">   
			<div className="intro-overlay" />	
			<div className="intro-content">
				<div className="row">
					<div className="col-twelve">
						<h5>Hello, ¿How are you?</h5>
						<h1>I'm Gustavo Adolfo Rodriguez.</h1>
						<p className="intro-position">
							<span>Front-end Developer</span>
							<span>Back-end Developer</span> 
						</p>
						<a className="button stroke smoothscroll" href="#about">More About Me</a>
					</div>  
				</div>   		 		
			</div> {/* /intro-content */} 

			{/* /intro-social */}      
			<SocialMedia socialClass="intro-social" />
		</section>
    );
};

export default Introduction;