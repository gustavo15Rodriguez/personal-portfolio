import React from 'react';

const Services = () => {
    return (
        <section id="services">
            <div className="overlay" />
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Services</h5>
                    <h1>What Can I Do For You?</h1>
                    <p className="lead">
                        I am responsible and committed to what I do. I like new challenges. I love 
                        programming and being in constant learning.
                    </p>
                </div>   		
            </div> {/* /section-intro */}

            <div className="row services-content">
                <div id="owl-slider" className="owl-carousel services-list">
                    <div className="service">	
                        <span className="icon"><i className="icon-earth" /></span>            
                        <div className="service-content">	
                            <h3>Web Design</h3>
                            <p className="desc">
                                Web designer in html, css and bootstrap according to client 
                                requirements. Website personalization.
                            </p>
                        </div> 	         	 
                    </div> {/* /service */}

                    <div className="service">	
                        <span className="icon"><i className="icon-window" /></span>                          
                        <div className="service-content">	
                            <h3>Web Development</h3>  
                            <p className="desc">
                                Web developer with experience in react js from client-side, 
                                Django, Django Rest Framework, and laravel from server-side.
                            </p>
                        </div>	                          
                    </div> {/* /service */}

                    <div className="service">
                        <span className="icon"><i className="icon-toggles" /></span>		            
                        <div className="service-content">
                            <h3>Mobile Design</h3>
                            <p className="desc">
                                Developer of mobile applications in react native mainly.
                            </p> 
                        </div> 	            	               
                    </div> {/* /service */}
                </div> {/* /services-list */}
            </div> {/* /services-content */}
        </section>
    );
}

export default Services;