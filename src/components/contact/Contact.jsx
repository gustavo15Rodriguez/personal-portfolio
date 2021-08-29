import React from 'react';

const Contact  = () => {
    return (
        <section id="contact">
            <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Contact</h5>
                    <h1>I'd Love To Hear From You.</h1>
                    <p className="lead">
                        If you are interested in any of my services, do not hesitate to contact me. 
                        I am at your service!
                    </p>
                </div> 
            </div> {/* /section-intro */}

            <div className="row contact-info">
                <div className="col-four tab-full">
                    <div className="icon">
                        <i className="icon-pin" />
                    </div>

                    <h5>Where to find me</h5>
                    <p>
                        Dosquebradas,<br />
                        Risaralda,<br />
                        Colombia
                    </p>
                </div>
                
                <div className="col-four tab-full collapse">
                    <div className="icon">
                        <i className="icon-mail" />
                    </div>
                    <h5>Email Me At</h5>
                    <p>
                        garodriguez263@gmail.com	     
                    </p>
                </div>

                <div className="col-four tab-full">
                    <div className="icon">
                        <i className="icon-phone" />
                    </div>
                    <h5>Call Me At</h5>
                    <p>
                        Mobile: (+57) 3023186441
                    </p>
                </div>
            </div> {/* /contact-info */}
        </section>
    );
}

export default Contact;