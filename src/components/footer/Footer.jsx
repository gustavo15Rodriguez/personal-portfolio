import React from 'react';
/* import $ from 'jquery'; */

import SocialMedia from '../social-media/SocialMedia';

const Footer = () => {
    /* const smoothScroll = (event) => {
        event.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    } */

    return (
        <footer>
            <div className="row">
                <div className="col-six tab-full pull-right social">
                    <SocialMedia socialClass="footer-social" />
                </div>

                <div className="col-six tab-full">
                    <div className="copyright">
                        <span>© Copyright Kards 2016.</span> 
                        <span>
                            Design by&nbsp;
                            <a 
                                href="http://www.styleshout.com/" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                styleshout
                            </a>
                        </span>	         	
                    </div>		                  
                </div>

                <div id="go-top">
                    <a 
                        className="smoothscroll" 
                        href="#top" 
                        /* onClick={ (event) => smoothScroll(event) } */
                    >
                        <i className="fa fa-long-arrow-up" />
                    </a>
                </div>
            </div> {/* /row */}     	
        </footer>
    );
};

export default Footer;